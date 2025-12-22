'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    quote:
      'The new website completely elevated our online presence. It made it easier for venues and private clients to understand what we offer, and we started getting better inquiries almost immediately. Since launching, our reach has grown and we’ve booked new gigs directly through the site. The process was smooth from start to finish, and everything was delivered exactly as promised.',
    author: 'Turn It Up!',
    role: 'Band Manager',
    color: '#D9F0E7'
  }
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  const active = testimonials[index];

  return (
    <section className="relative bg-accent overflow-hidden section-space">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="font-display text-[clamp(2rem,4vw,2.7rem)] leading-tight max-w-xl">
              The experience clients actually get
            </h2>

            <p className="text-white/80 text-[15px] mt-2 leading-relaxed max-w-md">
              A working relationship that brings clarity, confidence, and
              organized direction.
            </p>
          </div>

          <div className="flex gap-3 mt-2">
            <button
              onClick={prev}
              className="h-11 w-11 rounded-full bg-white border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition"
            >
              ←
            </button>
            <button
              onClick={next}
              className="h-11 w-11 rounded-full bg-white border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition"
            >
              →
            </button>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.quote}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              style={{ backgroundColor: active.color }}
              className="p-8 flex flex-col justify-between rounded-sm shadow-sm"
            >
              <p className="text-[clamp(1.55rem,2.6vw,1.75rem)] leading-[1.26] font-light tracking-tight max-w-4xl">
                {active.quote}
              </p>

              <div className="pt-6">
                <div className="font-medium text-[17px]">{active.author}</div>
                <div className="text-neutral-700 text-sm">{active.role}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
