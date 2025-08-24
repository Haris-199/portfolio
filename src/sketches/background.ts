import p5 from 'p5';

type Particle = {
  pos: p5.Vector;
  col: [number, number, number, number?];
};

const background = (p: p5) => {
  const extraSize = 10;
  const inc = 0.01;
  let zoff = 0;

  const parts: Particle[] = [];
  let n: number;
  let velMag: number;
  let weight: number;
  let iterations: number;

  p.setup = () => {
    const c = p.createCanvas(p.windowWidth + extraSize, p.windowHeight + extraSize);
    c.position(-extraSize / 2, -extraSize / 2, 'fixed');
    c.style('z-index', '-1000');
    c.style('filter', 'blur(3px)');

    velMag = p.map(p.width, 300, 2000, 0.12, 0.71);
    weight = p.map(p.width, 300, 2000, 1, 1.75);
    iterations = p.round(p.map(p.width, 300, 2000, 5, 15));
    n = p.round(p.map(p.width, 300, 2000, 50, 150));

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

    p.frameRate(20);
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

        const a = p.noise(x * inc, y * inc, zoff) * p.TWO_PI * 4;

        part.pos.add(p5.Vector.fromAngle(-a, velMag));
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
};

function weightedRandom<T>(items: T[], weights: number[]) {
  if (items.length !== weights.length) {
    throw new Error('Items and weights must be the same length.');
  }

  const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
  const random = Math.random() * totalWeight;

  let cumulativeWeight = 0;
  for (let i = 0; i < items.length; i++) {
    cumulativeWeight += weights[i];
    if (random < cumulativeWeight) {
      return items[i];
    }
  }

  // In case of floating point issues
  return items[items.length - 1];
}

export default background;
