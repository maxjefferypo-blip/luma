// Netlify Edge Function entry. @netlify/vite-plugin-react-router builds this file as the
// SSR handler for every non-static path (and runs it in `npm run dev`).
import * as serverBuild from 'virtual:react-router/server-build';
import {createRequestHandler, storefrontRedirect} from '@shopify/hydrogen';
import type {Context} from '@netlify/edge-functions';
import {createHydrogenRouterContext} from '~/lib/context';

/** Netlify site environment variables in production; process.env (.env) in local dev. */
function getEnv(): Env {
  // `Netlify` is a global in the Netlify runtime (typed by @netlify/edge-functions); absent in local dev.
  const netlify = (globalThis as {Netlify?: typeof Netlify}).Netlify;
  const values = netlify?.env?.toObject?.() ?? (typeof process !== 'undefined' ? process.env : {});
  return values as unknown as Env;
}

/** Without these, Hydrogen throws on every request. Listed by name only (never values). */
const REQUIRED_ENV = ['SESSION_SECRET', 'PUBLIC_STORE_DOMAIN', 'PUBLIC_STOREFRONT_API_TOKEN'] as const;

export default async function handler(request: Request, netlifyContext: Context): Promise<Response> {
  try {
    const env = getEnv();
    // PUBLIC_STORE_DOMAIN=mock.shop uses Shopify's public demo store, which needs no API token.
    const isMockShop = env.PUBLIC_STORE_DOMAIN?.includes('mock.shop');
    const missing = REQUIRED_ENV.filter((key) => !env[key] && !(isMockShop && key === 'PUBLIC_STOREFRONT_API_TOKEN'));
    if (missing.length) {
      console.error(`Missing environment variables: ${missing.join(', ')}`);
      return new Response(
        `Luma storefront isn't configured yet.\n\nMissing environment variables: ${missing.join(', ')}\n\n` +
          'Add them in Netlify › Project configuration › Environment variables, then redeploy (Deploys › Trigger deploy).',
        {status: 503, headers: {'Content-Type': 'text/plain; charset=utf-8'}},
      );
    }
    const executionContext = {
      waitUntil: (promise: Promise<unknown>) => {
        if (typeof netlifyContext?.waitUntil === 'function') netlifyContext.waitUntil(promise);
      },
      passThroughOnException: () => {},
    } as ExecutionContext;

    const hydrogenContext = await createHydrogenRouterContext(request, env, executionContext);

    /**
     * Hydrogen request handler: proxies Storefront API requests and delegates rendering to React Router.
     */
    const handleRequest = createRequestHandler({
      build: serverBuild,
      mode: process.env.NODE_ENV,
      getLoadContext: () => hydrogenContext,
    });

    const response = await handleRequest(request);

    if (hydrogenContext.session.isPending) {
      response.headers.set('Set-Cookie', await hydrogenContext.session.commit());
    }

    if (response.status === 404) {
      /**
       * Check Shopify URL redirects only when the app 404s. If there is none, the 404 passes through.
       */
      return storefrontRedirect({request, response, storefront: hydrogenContext.storefront});
    }

    return response;
  } catch (error) {
    console.error(error);
    return new Response('An unexpected error occurred', {status: 500});
  }
}
