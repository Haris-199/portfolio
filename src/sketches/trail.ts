import p5 from 'p5';

type Vector = {
  x: number;
  y: number;
};

const trail = (p: p5) => {
  const ribbonLength = 8;
  const ribbon: Vector[] = Array.from({ length: ribbonLength }, () => ({ x: 0, y: 0 }));
  const hues: number[] = Array.from({ length: ribbonLength }, (_, i) =>
    p.map(i, 0, ribbonLength - 1, 160, 300)
  );

  const target: Vector = { x: 0, y: 0 };
  let head = 0;

  p.setup = () => {
    const c = p.createCanvas(p.windowWidth, p.windowHeight);
    
    if (p.width < 800) c.remove();
    
    c.position(0, 0, 'fixed');
    c.style('pointer-events', 'none');
    c.style('z-index', '1000');

    p.colorMode(p.HSB);
    p.noFill();
    p.strokeWeight(2);
  };

  p.draw = () => {
    p.clear();

    const mx = p.mouseX >= 0 && p.mouseY >= 0 ? p.mouseX : 0;
    const my = p.mouseY >= 0 && p.mouseY >= 0 ? p.mouseY : 0;

    target.x += (mx - target.x) * 0.18;
    target.y += (my - target.y) * 0.18;

    ribbon[head].x = target.x;
    ribbon[head].y = target.y;

    head = (head + 1) % ribbonLength;

    p.beginShape('quads');
    for (let i = 0; i < ribbon.length; i++) {
      const idx = (head + i) % ribbonLength;
      const pos = ribbon[idx];

      p.stroke(hues[i], 80, 100, 0.7);
      p.vertex(pos.x, pos.y);
    }
    p.endShape();
  };
};

export default trail;
