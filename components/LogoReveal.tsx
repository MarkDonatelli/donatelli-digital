'use client';

import { motion } from 'framer-motion';

export default function LogoReveal() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className="relative flex flex-col items-center justify-center min-h-[70vh] overflow-hidden"
    >
      {/* Ambient glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 1.1 }}
        className="absolute w-[420px] h-[420px]  bg-accent/30 blur-[150px] rounded-full"
      />

      {/* Logo container */}
      <div className="flex items-center gap-3 relative z-10">
        {/* D left */}
        <motion.span
          initial={{ x: -55, opacity: 0, scale: 0.94 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 0.75,
            ease: [0.25, 1, 0.32, 1]
          }}
          className="font-display text-[clamp(4rem,12vw,9.5rem)] leading-none tracking-tight"
        >
          D
        </motion.span>

        {/* D right */}
        <motion.span
          initial={{ x: 55, opacity: 0, scale: 0.94 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 0.75,
            ease: [0.25, 1, 0.32, 1],
            delay: 0.25
          }}
          className="font-display text-[clamp(4rem,12vw,9.5rem)] leading-none tracking-tight"
        >
          D
        </motion.span>
      </div>

      {/* Ripple highlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.65 }}
        animate={{ opacity: 0.28, scale: 1.25 }}
        transition={{ delay: 0.6, duration: 1.6 }}
        className="absolute w-[520px] h-[520px] border border-accent/30 rounded-full blur-[2px]"
      />

      {/* Name reveal */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: 1.0
        }}
        className="relative z-10 uppercase tracking-[0.38em] text-[12px] mt-2 text-secondary/95"
      >
        Donatelli Digital
      </motion.p>

      {/* Divider */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 240, opacity: 1 }}
        transition={{
          duration: 0.75,
          delay: 1.35
        }}
        className="relative z-10 h-[2px] bg-accent mt-8 rounded-full"
      />

      {/* Tagline */}
      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: 1.65
        }}
        className="relative z-10 px-4 text-center font-light max-w-xl mt-9 text-[17px] leading-relaxed text-secondary"
      >
        Modern digital identity and web execution for business that want
        clarity.
      </motion.h2>

      {/* HOLD TIME BEFORE FADE */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 3.1 // stays visible around ~2 sec after full tagline
        }}
      />
    </motion.div>
  );
}
