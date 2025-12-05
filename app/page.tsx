'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-primary text-tertiary">
      <div className="space-y-6 text-center">
        <motion.h1
          className="text-6xl font-display tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Donatelli Digital
        </motion.h1>

        <p className="text-secondary text-lg">
          A modern digital studio crafting websites with clarity, simplicity,
          and intention.
        </p>

        <p className="uppercase tracking-wider text-sm text-secondary mt-8">
          Full site launching soon
        </p>
      </div>
    </main>
  );
}
