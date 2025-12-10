'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    quote:
      'Hiring Mark was one of the best decisions we made this year. He took scattered ideas, clarified them, and delivered something that actually moves people to act.',
    author: 'Sarah Daniels',
    role: 'Marketing Director, Orchard Lane',
    color: '#D9F0E7'
  },
  {
    quote:
      'We finally look like the company we actually are. The site feels polished, structured, and we’ve already seen performance lift since launch.',
    author: 'Chris Hoffman',
    role: 'Co-Founder, Northbend Labs',
    color: '#F4D9EF'
  },
  {
    quote:
      'The clarity, pace, and communication were unmatched. Zero friction from kickoff to delivery.',
    author: 'Alex Porter',
    role: 'Founder, AP Advisory',
    color: '#D8E5FA'
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

        <div className="relative h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.quote}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              style={{ backgroundColor: active.color }}
              className="absolute inset-0 p-[clamp(2rem,4vw,3rem)] flex flex-col justify-between rounded-sm shadow-sm"
            >
              <p className="text-[clamp(1.55rem,2.6vw,2.15rem)] leading-[1.26] font-light tracking-tight max-w-4xl">
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
