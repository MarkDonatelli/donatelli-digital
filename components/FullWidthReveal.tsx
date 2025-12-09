'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function FullWidthReveal() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'end 60%']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const blur = useTransform(scrollYProgress, [0, 1], [16, 0]);

  const blurFilter = useTransform(blur, (val) => `blur(${val}px)`);

  return (
    <section ref={ref} className="relative w-screen overflow-hidden">
      <motion.div
        style={{
          scale,
          opacity,
          filter: blurFilter
        }}
        className="w-screen h-[60vh] bg-cover bg-center bg-no-repeat relative"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('./images/mockup-collage.png')"
          }}
        />
      </motion.div>
    </section>
  );
}
