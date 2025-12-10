'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FullWidthReveal() {
  const ref = useRef<HTMLDivElement | null>(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-10% 0px'
  });

  return (
    <section ref={ref} className="relative w-screen overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(12px)' }}
        animate={inView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
        transition={{
          duration: 0.85,
          ease: 'easeOut'
        }}
        style={{ willChange: 'opacity, transform, filter' }}
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
