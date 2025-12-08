'use client';

import { motion } from 'framer-motion';
import GlowLayer from './GlowLayer';
import TestimonialsCarousel from './TestimonialsCarousel';

export default function SectionReveal({ logoDone }: { logoDone: boolean }) {
  return (
    <>
      <section className="relative overflow-visible">
        <GlowLayer
          logoDone={logoDone}
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8, ease: 'easeOut' }}
          placementClass="pointer-events-none absolute -top-[180px] left-1/2 -translate-x-1/2 w-[640px] h-[380px]"
          className="bg-accent/20 blur-[140px] rounded-[58%]"
        />

        <GlowLayer
          logoDone={logoDone}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8, ease: 'easeOut' }}
          placementClass="pointer-events-none absolute -bottom-[125px] right-[14%] w-[520px] h-[300px] z-20"
          className="bg-accent/40 blur-[120px] rounded-[55%]"
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={logoDone ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.7, ease: 'easeOut' }}
          className="relative w-full section-space"
        >
          <div className="max-w-6xl mx-auto px-6 space-y-20">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={logoDone ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65, duration: 0.45 }}
              className="max-w-3xl"
            >
              <h2 className="font-display text-[clamp(2.2rem,4vw,2.8rem)] leading-tight tracking-[-0.01em] mb-6">
                A good website is simply a clear conversation. One that unfolds
                naturally.
              </h2>

              <p className="text-[16px] text-neutral-600 leading-[1.72] max-w-xl">
                When someone lands on your site, they’re trying to understand a
                few basic things: what you do, why it matters, and what to do
                next. Everything I design supports that moment of clarity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={logoDone ? { opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mx-auto w-full h-px bg-linear-to-r from-transparent via-accent/35 to-transparent"
            />

            <div className="grid lg:grid-cols-6 gap-20 lg:gap-14">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={logoDone ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.95, duration: 0.45 }}
                className="lg:col-span-2 space-y-4"
              >
                <span className="text-sm text-neutral-500 tracking-wider">
                  01 — Messaging
                </span>
                <h3 className="font-semibold text-[20px] text-accent leading-snug tracking-tight">
                  Say the right thing clearly
                </h3>
                <p className="text-[15px] text-neutral-600 leading-relaxed max-w-[36ch]">
                  Simple language that honors the way real people speak. Not
                  buzzwords, not over-explanation—just clarity with confidence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={logoDone ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.05, duration: 0.45 }}
                className="lg:col-span-2 space-y-4"
              >
                <span className="text-sm text-neutral-500 tracking-wider">
                  02 — Structure
                </span>
                <h3 className="font-semibold text-[20px] text-accent leading-snug tracking-tight">
                  Guide people without them noticing
                </h3>
                <p className="text-[15px] text-neutral-600 leading-relaxed max-w-[36ch]">
                  Information arranged in the same rhythm people make decisions:
                  understanding → trust → action.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={logoDone ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.15, duration: 0.45 }}
                className="lg:col-span-2 space-y-4"
              >
                <span className="text-sm text-neutral-500 tracking-wider">
                  03 — Delivery
                </span>
                <h3 className="font-semibold text-[20px] text-accent leading-snug tracking-tight">
                  Make the whole process feel calm
                </h3>
                <p className="text-[15px] text-neutral-600 leading-relaxed max-w-[36ch]">
                  No guesswork, no wondering what’s next. Clear checkpoints,
                  realistic pacing, and honest communication.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <TestimonialsCarousel />
    </>
  );
}
