'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function MarqueeStrip({ items }: { items: string[] }) {
  return (
    <section className="relative bg-tertiary border-y border-tertiary/40 py-6 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-tertiary to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-tertiary to-transparent pointer-events-none z-10" />

      <div className="flex w-max relative">
        {[0, 1].map((loop) => (
          <motion.div
            key={loop}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            className="flex whitespace-nowrap items-center gap-12 px-6 text-xs tracking-[0.22em] uppercase font-inter text-white/60"
          >
            {items.map((item, i) => (
              <React.Fragment key={`${item}-${i}-${loop}`}>
                <span>{item}</span>
                <span className="text-accent">•</span>
              </React.Fragment>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
