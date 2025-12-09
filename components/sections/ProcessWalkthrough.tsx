'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import GlowLayer from '../GlowLayer';

const steps = [
  {
    title: 'Discovery & Messaging',
    description:
      'We refine what you say, why it matters, and how customers should perceive your brand.',
    visual: (
      <div className="space-y-4">
        <div className="h-10 w-3/4 bg-neutral-300 rounded" />
        <div className="h-6 w-1/2 bg-neutral-200 rounded" />
        <div className="grid grid-cols-3 gap-4 pt-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-20 bg-neutral-200 rounded" />
          ))}
        </div>
      </div>
    )
  },
  {
    title: 'Wireframe & Structure',
    description:
      'Clear sections, hierarchy, and flow so people know what to do without thinking.',
    visual: (
      <div className="space-y-6">
        <div className="h-8 w-1/2 bg-teal-200/70 rounded" />
        <div className="h-32 bg-neutral-200 rounded" />
        <div className="grid grid-cols-2 gap-4">
          <div className="h-20 bg-neutral-200 rounded" />
          <div className="h-20 bg-neutral-200 rounded" />
        </div>
      </div>
    )
  },
  {
    title: 'Design & Identity',
    description:
      'Move from structure to a visual system that communicates trust and clarity.',
    visual: (
      <div className="space-y-6 bg-linear-to-br from-white to-neutral-100 p-8 rounded-xl">
        <div className="w-3/4 h-12 bg-accent/70 rounded" />
        <div className="w-2/3 h-10 bg-accent/40 rounded" />
        <div className="grid grid-cols-2 gap-6">
          <div className="h-24 bg-accent/30 rounded" />
          <div className="h-24 bg-accent/20 rounded" />
        </div>
      </div>
    )
  },
  {
    title: 'Development & Launch',
    description:
      'Production-ready builds, responsive layouts, CMS prep, and launch support.',
    visual: (
      <div className="space-y-6">
        <div className="h-6 w-24 bg-green-300 rounded" />
        <div className="h-6 w-32 bg-green-300 rounded" />
        <div className="h-6 w-20 bg-green-300 rounded" />
        <div className="w-full h-28 bg-neutral-300 rounded-lg border border-neutral-400 flex items-center justify-center text-neutral-700 text-sm">
          Responsive Preview
        </div>
      </div>
    )
  }
];

export default function ProcessWalkthrough({
  logoDone
}: {
  logoDone: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center']
  });

  return (
    <section
      className="relative w-full bg-[#f8faf9] py-20 md:py-32 lg:py-48"
      ref={ref}
    >
      {/* Glows: only show on md+ so mobile isn&apos;t messy */}
      <GlowLayer
        logoDone={logoDone}
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ delay: 0.55, duration: 0.8, ease: 'easeOut' }}
        placementClass="pointer-events-none absolute -bottom-[180px] left-1/2 -translate-x-1/2 w-[640px] h-[380px]"
        className="bg-accent/30 blur-[140px] rounded-[58%]"
      />

      <GlowLayer
        logoDone={logoDone}
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ delay: 0.55, duration: 0.8, ease: 'easeOut' }}
        placementClass="pointer-events-none absolute -top-[180px] left-[90%] -translate-x-1/2 w-[640px] h-[380px]"
        className="bg-accent/30 blur-[140px] rounded-[58%]"
      />

      <GlowLayer
        logoDone={logoDone}
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ delay: 0.55, duration: 0.8, ease: 'easeOut' }}
        placementClass=" pointer-events-none absolute top-[50%] left-[5%] -translate-x-1/2 -translate-y-1/2 w-[640px] h-[380px]"
        className="bg-accent/30 blur-[140px] rounded-[58%]"
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 px-4 lg:px-6">
        <div className="space-y-4 lg:space-y-6 lg:sticky lg:top-[20vh] h-fit">
          <motion.h2 className="font-display text-[clamp(2rem,6vw,3.4rem)] leading-tight">
            How we turn ideas into something real
          </motion.h2>

          <motion.p className="text-neutral-600 max-w-md leading-relaxed text-[0.95rem] md:text-base">
            Every project moves through a simple but meaningful process designed
            to reduce friction and create clarity.
          </motion.p>
        </div>

        <div className="space-y-10 lg:space-y-[6vh]">
          {steps.map((step, i) => {
            const start = i / steps.length;
            const end = (i + 1) / steps.length;

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const translateY = useTransform(
              scrollYProgress,
              [start, end],
              [70, 0]
            );

            return (
              <motion.div
                key={step.title}
                style={{ opacity, y: translateY }}
                className="rounded-xl relative z-5 border border-neutral-200 shadow-lg bg-white p-6 md:p-7 lg:p-10"
              >
                <h3 className="font-semibold text-[1.2rem] md:text-[1.35rem] mb-3 text-[#121417]">
                  {step.title}
                </h3>
                <p className="text-neutral-600 mb-6 md:mb-8 max-w-md text-[0.95rem] md:text-base">
                  {step.description}
                </p>

                <div className="opacity-90">{step.visual}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
