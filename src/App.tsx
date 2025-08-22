import { styled, ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import './global.css';
import { useRef } from 'react';
import useP5Sketch from './hooks/useP5Sketch';
import background from './sketches/background';

const theme = {
  black: '#000000',
  blue: '#1b4fc0',
  orange: '#FCA311',
  grey: '#E5E5E5',
  shadow: '#A5A5A5',
  white: '#FFFFFF',

  text: '#FFF',
  background: '#000000',
  foreground: '#202020',
  primary: '#1b4fc0',
  secondary: '#e4920e',
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  color: ${(props) => props.theme.text};

  & > :nth-child(2) {
    margin-block: 2rem;
    flex-grow: 1;

    @media (min-width: 1300px) {
      padding: 2rem calc(1rem + 5%);
    }

    @media (min-width: 2100px) {
      padding: 2rem calc(1rem + 20%);
    }
  }
  `;

export default function App() {
  const ref = useRef<HTMLDivElement>(null);
  useP5Sketch(background, ref);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout ref={ref}>
          <Header />
          <Outlet />
          <Footer />
        </Layout>
      </ThemeProvider>
    </>
  );
}



/*

  const divRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  useEffect(() => {
    let sketch: p5 | undefined;
    let sketch2: p5 | undefined;

    if (divRef.current) {
      type Particle = {
        pos: p5.Vector;
        col: [number, number, number, number?];
      };

      const parts: Particle[] = [];
      let n;
      const inc = 0.01;
      let zoff = 0;
      const scl = 1;
      let velMag: number;
      let weight: number;
      let iterations: number;

      sketch = new p5((p: p5) => {
        p.setup = () => {
          // const c = p.createCanvas(500, 500);
          const c = p.createCanvas(p.windowWidth + 10, p.windowHeight);
          c.position(-5, 0);
          c.style('position', 'fixed');
          c.style('z-index', '-1000');
          c.style('filter', 'blur(3px)');

          velMag = p.map(p.width, 300, 2000, 0.12, 0.71);
          weight = p.map(p.width, 300, 2000, 1, 1.75);
          iterations = p.round(p.map(p.width, 300, 2000, 5, 30));
          // n = p.round(p.map(p.width, 300, 2000, 100, 300));
          n = 100;

          for (let i = 0; i < n; i++) {
            const pos = p.createVector(p.random(p.width), p.random(p.height));
            parts.push({
              pos,

              col: weightedRandom(
                [
                  [255, 10, 120, 30],
                  [0, 100, 150, 45],
                  [0, 0, 0],
                ],
                [0.325, 0.325, 0.35]
              ),
            });
          }

          if (p.width >= 1000) p.frameRate(iterations);
          p.background(0);
        };

        p.draw = () => {
          if (p.frameCount > 3000) p.noLoop();

          for (let t = 0; t < iterations; t++) {
            for (let i = 0; i < parts.length; i++) {
              const part = parts[i];
              const { x, y } = part.pos;

              edge(part.pos);
              p.stroke(...part.col);
              p.strokeWeight(weight);

              p.point(x, y);

              const a =
                p.noise(p.floor(x / scl) * inc * scl, p.floor(y / scl) * inc * scl, zoff) *
                p.PI *
                8;

              part.pos.add(p5.Vector.fromAngle(a, velMag));
            }

            zoff += inc;
          }
          p.stroke(255);
        };

        function edge(pos: p5.Vector) {
          if (pos.x > p.width) pos.x = 0;
          if (pos.x < 0) pos.x = p.width;
          if (pos.y > p.height) pos.y = 0;
          if (pos.y < 0) pos.y = p.height;
        }
      }, divRef.current);
    }
    return () => {
      if (sketch) sketch.remove();
      if (sketch2) sketch2.remove();
    };
  }, [width]);
*/