'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

let lenisSingleton: Lenis | null = null;

export function getLenisInstance() {
  return lenisSingleton;
}

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    if (prefersReducedMotion.matches) {
      return; // don't init Lenis
    }

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,

      wheelMultiplier: 1,
      lerp: 0.08
    });

    lenisSingleton = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisSingleton = null;
    };
  }, []);

  return null;
}
