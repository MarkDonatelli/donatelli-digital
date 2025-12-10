'use client';

import { motion } from 'framer-motion';

export default function WhatYouGetSection({ logoDone }: { logoDone: boolean }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      animate={logoDone ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.45, duration: 0.7, ease: 'easeOut' }}
      className="relative w-full section-space bg-[#f8faf9]"
    >
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        <div className="max-w-3xl">
          <h2 className="font-display text-[clamp(2.1rem,4vw,2.8rem)] leading-tight tracking-[-0.01em] mb-5">
            What you get when we build your website
          </h2>

          <p className="text-[16px] text-neutral-600 leading-[1.72] max-w-xl">
            Everything we deliver is built with clarity, conversion structure,
            and long-term usability—so your site looks great, works well, and
            moves the right people to take action.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-y-14 gap-x-16">
          <div className="space-y-2">
            <h3 className="font-semibold text-[18px] text-[#121417] leading-snug">
              Brand-level messaging refinement
            </h3>
            <p className="text-[15px] text-neutral-600 leading-relaxed">
              Clear language that explains what you do and why it matters.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-[18px] text-[#121417] leading-snug">
              Conversion-structured layouts
            </h3>
            <p className="text-[15px] text-neutral-600 leading-relaxed">
              CTA placement, hierarchy, and flow that guide people without
              effort.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-[18px] text-[#121417] leading-snug">
              Mobile-first responsive experience
            </h3>
            <p className="text-[15px] text-neutral-600 leading-relaxed">
              Designed so it feels effortless across every device.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-[18px] text-[#121417] leading-snug">
              Light SEO foundation
            </h3>
            <p className="text-[15px] text-neutral-600 leading-relaxed">
              Semantic structure, titles, accessibility, and clean metadata.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-[18px] text-[#121417] leading-snug">
              Easy-to-edit site sections
            </h3>
            <p className="text-[15px] text-neutral-600 leading-relaxed">
              Modular blocks so you can manage and update content freely.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-[18px] text-[#121417] leading-snug">
              A smooth, transparent delivery process
            </h3>
            <p className="text-[15px] text-neutral-600 leading-relaxed">
              Checkpoints, clear communication, and a realistic timeline.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
