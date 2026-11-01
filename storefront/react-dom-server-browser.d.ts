// Web-streams React server build, used by app/entry.server.tsx (same API as react-dom/server).
declare module 'react-dom/server.browser' {
  export {renderToReadableStream} from 'react-dom/server';
}
