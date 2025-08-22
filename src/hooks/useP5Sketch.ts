import p5 from 'p5';
import { useEffect } from 'react';
import useWindowSize from './useWindowSize';

export default function useP5Sketch<T extends HTMLElement>(
  sketch: (p: p5) => void,
  ref?: React.RefObject<T | null>
) {
  const { width } = useWindowSize();

  useEffect(() => {
    let canvas: p5 | undefined;
    if (ref === undefined) canvas = new p5(sketch, document.getElementById('root')!);
    else if (ref.current) canvas = new p5(sketch, ref.current);

    return () => {
      if (canvas) canvas.remove();
    };
  }, [sketch, ref, width]);
}
