'use client';

import { motion, type MotionValue } from 'framer-motion';

type HeroSectionProps = {
  logoDone: boolean;
  heroShiftY: MotionValue<number>;
};

export default function HeroSection({ logoDone, heroShiftY }: HeroSectionProps) {
  return (
    <motion.section
      style={{ y: heroShiftY }}
      initial={{ opacity: 0, y: 14 }}
      animate={logoDone ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="relative z-10 pt-[13vh] pb-[12vh]"
    >
      <div className="max-w-6xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={logoDone ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.45 }}
          className="text-[13px] tracking-[0.2em] text-neutral-600 uppercase mb-6"
        >
          Donatelli Digital
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={logoDone ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.45 }}
          className="text-[11px] uppercase tracking-[0.22em] text-neutral-500"
        >
          Modern websites supporting real business goals
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={logoDone ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.55 }}
          className="font-display mt-8 text-[clamp(3.1rem,7vw,4.3rem)] leading-[1.06]"
        >
          Websites that elevate how you look, communicate clearly, and convert
          better.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={logoDone ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.45 }}
          className="max-w-xl mx-auto mt-6 text-neutral-500 leading-relaxed font-light"
        >
          Donatelli Digital. We create websites that help your business show up
          professionally, communicate clearly, and convert more of the right
          people.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={logoDone ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85, duration: 0.45 }}
          className="flex justify-center gap-4 mt-12 flex-col sm:flex-row"
        >
          <button className="group relative px-8 py-3.5 rounded-lg bg-accent text-white uppercase tracking-[0.13em] text-[12px] font-semibold shadow-[0_0_20px_rgba(0,0,0,0.08)] hover:bg-accent-hover transition overflow-hidden">
            <span className="relative z-10">Book Intro Call</span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-15 transition bg-white"></span>
          </button>

          <button className="px-8 py-3.5 rounded-lg border border-accent text-accent uppercase tracking-[0.13em] text-[12px] font-semibold hover:bg-accent/10 transition">
            View Work
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
