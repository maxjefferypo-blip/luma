import {useRouteLoaderData} from 'react-router';
import type {Route} from './+types/science';
import type {RootLoader} from '~/root';
import {Button} from '~/components/luma/Button';
import {SpecList} from '~/components/luma/Content';
import {Container, Overline, ProductShot, Section, WaveDiagram} from '~/components/luma/Kit';
import {DEFAULT_PRODUCT_HANDLE, IMG, productPath} from '~/lib/luma';

// Science — project/ui_kits/website/SciencePage.jsx. Static brand content; figures follow the figures register.

export const meta: Route.MetaFunction = () => [
  {title: 'The science | Luma'},
  {name: 'description', content: 'A plain explanation of what LC–01 does to the light from your screen, and how we measured it.'},
];

export default function Science() {
  const root = useRouteLoaderData<RootLoader>('root');
  const shop = productPath(root?.productHandle ?? DEFAULT_PRODUCT_HANDLE);
  return (
    <>
      <Section style={{paddingTop: 96}}>
        <Container narrow>
          <div style={{display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 720}}>
            <Overline>The science</Overline>
            <h1 className="luma-hero">Light, reimagined.</h1>
            <p className="luma-lead" style={{maxWidth: 560}}>A plain explanation of what LC–01 does to the light from your screen, and how we measured it.</p>
          </div>
        </Container>
      </Section>

      <Section style={{paddingTop: 0}}>
        <Container>
          <div style={{display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)', gap: 24}} className="k-sci-media">
            <div style={{background: 'var(--luma-mist)', borderRadius: 'var(--radius-lg)', padding: '48px 40px', display: 'flex', alignItems: 'center'}}>
              <WaveDiagram style={{width: '100%'}} />
            </div>
            <ProductShot src={IMG.rays} alt="Light passing through the LC–01 conversion layer" pad="6%" />
          </div>
        </Container>
      </Section>

      <Section id="technology" style={{paddingTop: 0}}>
        <Container narrow>
          <div className="k-split" style={{gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)'}}>
            <h2 className="luma-h2">What quantum dots do.</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
              <p className="luma-body">Quantum dots are semiconductor particles a few nanometres across. Their size decides which colour of light they give off.</p>
              <p className="luma-body">
                In LC–01, they are tuned to absorb part of the blue light a screen emits and re-emit that energy at longer, red wavelengths. The rest of the light passes through the glass unchanged.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section style={{paddingTop: 0}}>
        <Container narrow>
          <div className="k-split" style={{gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)'}}>
            <h2 className="luma-h2">Why the evening.</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
              <p className="luma-body">For many of us, a phone is the last light we look at before bed. LC–01 changes some of that light: less blue, more red.</p>
              <p className="luma-body">We don’t claim it changes how you sleep. We show exactly what it does to the light, and how we measured it.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="results" tone="stone">
        <Container narrow>
          <div className="k-split" style={{gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
              <Overline>Test results</Overline>
              <h2 className="luma-h2">Measured, not assumed.</h2>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
              <SpecList
                items={[
                  {label: 'Blue-light reduction', value: '17.17%', note: 'Reported TÜV test sample'},
                  {label: 'Conversion efficiency', value: '28.72%', note: 'Manufacturer-defined test metric. It isn’t the share of all screen blue light that becomes red light.'},
                  {label: 'Light transmission', value: '≈ 91%', note: 'Product specification'},
                  {label: 'Glass thickness', value: '0.33 mm', note: 'Product specification'},
                ]}
              />
              <p className="luma-caption">These figures describe a measured sample. They are not clinical results, and LC–01 is not a medical device.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container narrow>
          <div className="k-split" style={{gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)'}}>
            <h2 className="luma-h2">What we don’t claim.</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: 24}}>
              <p className="luma-body">
                We don’t claim LC–01 improves sleep, eye health or circadian rhythm, and it isn’t red-light therapy. We describe what it does to light, and show how we measured it.
              </p>
              <div>
                <Button variant="outline" iconRight="arrow-right" to={shop}>Shop LC–01</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
