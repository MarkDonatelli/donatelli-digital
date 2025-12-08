'use client';

import { motion, type MotionProps } from 'framer-motion';

type GlowLayerProps = {
  logoDone: boolean;
  placementClass: string;
  initial: MotionProps['initial'];
  animate: MotionProps['animate'];
  transition: MotionProps['transition'];
  className?: string;
};

export default function GlowLayer({
  logoDone,
  placementClass,
  initial,
  animate,
  transition,
  className
}: GlowLayerProps) {
  const composedClass = className
    ? `${placementClass} ${className}`
    : placementClass;

  return (
    <motion.div
      initial={initial}
      animate={logoDone ? animate : {}}
      transition={transition}
      className={composedClass}
    />
  );
}
