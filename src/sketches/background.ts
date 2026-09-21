import p5 from "p5";

type Particle = {
  pos: p5.Vector;
  col: [number, number, number, number?];
};

const createBackground = (theme: "light" | "dark") => (p: p5) => {
  const extraSize = 10;
  const inc = theme === "light" ? 0.009 : 0.01;
  let zoff = 0;

  const parts: Particle[] = [];
  let n: number;
  let velMag: number;
  let iterations: number;

  const bgColor = theme === "light" ? 255 : 0;
  const particleColors: [number, number, number, number?][] = theme === "light"
    ? [
      [230, 60, 140, 25],
      [20, 140, 230, 25],
      [220, 225, 235, 40],
    ]
    : [
      [255, 10, 120, 30],
      [0, 100, 150, 52],
      [0, 0, 0, 200],
    ];

  p.setup = () => {
    const c = p.createCanvas(
      p.windowWidth + extraSize,
      p.windowHeight + extraSize,
    );

    c.position(-extraSize / 2, -extraSize / 2, "fixed");
    c.style("z-index", "-1000");
    c.style("filter", "blur(3px)");

    velMag = p.map(p.width, 300, 2000, 0.5, 0.71);
    iterations = p.round(p.map(p.width, 300, 2000, 10, 15));

    if (p.width > 1500) {
      n = 175;
    } else if (p.width > 1000) {
      n = 100;
    } else {
      n = 50;
    }
    for (let i = 0; i < n; i++) {
      const pos = p.createVector(p.random(p.width), p.random(p.height));
      parts.push({
        pos,
        col: weightedRandom(particleColors, [0.325, 0.325, 0.35]),
      });
    }

    p.strokeWeight(1.75);
    p.frameRate(20);
    p.background(bgColor);
  };

  p.draw = () => {
    if (p.frameCount > 3000) p.noLoop();

    for (let t = 0; t < iterations; t++) {
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        const { x, y } = part.pos;

        edge(part.pos);
        p.stroke(...part.col);
        p.point(x, y);

        const a = p.noise(x * inc, y * inc, zoff) * p.TWO_PI * 4;

        part.pos.x += Math.cos(-a) * velMag;
        part.pos.y += Math.sin(-a) * velMag;
      }

      zoff += inc;
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth + extraSize, p.windowHeight + extraSize);
    p.background(bgColor);

    // Randomly redistribute half the particles to instantly fill new space
    parts.forEach((part) => {
      if (Math.random() > 0.5) {
        part.pos.x = p.random(p.width);
        part.pos.y = p.random(p.height);
      }
    });

    if (p.frameCount > 3000) {
      p.frameCount = 0;
      p.loop();
    }
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
    throw new Error("Items and weights must be the same length.");
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
  return items[items.length - 1];
}

export default createBackground;
