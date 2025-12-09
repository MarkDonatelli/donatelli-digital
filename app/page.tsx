'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import Divider from '@/components/Divider';
import LogoReveal from '@/components/LogoReveal';
import HeroSection from '@/components/sections/HeroSection';
import ProcessWalkthrough from '@/components/sections/ProcessWalkthrough';
import SectionOne from '@/components/sections/SectionOne';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import WhatYouGetSection from '@/components/sections/WhatYouGetSection';
import FullWidthReveal from '@/components/FullWidthReveal';

export default function Home() {
  const [logoDone, setLogoDone] = useState(false);

  const mainRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ['start start', 'end end']
  });

  const heroShiftY = useTransform(scrollYProgress, [0.02, 0.2], [0, -20]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.2], [0.92, 0.32]);

  React.useEffect(() => {
    if (!logoDone) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.position = 'fixed';
      document.body.style.top = '0';
      document.body.style.width = '100%';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.paddingRight = '';
    }
  }, [logoDone]);

  return (
    <main
      ref={mainRef}
      className="relative min-h-screen bg-[#f8faf9] text-[#121417] overflow-hidden"
    >
      {/* LOGO INTRO */}
      {!logoDone && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2.8, duration: 1.45, ease: 'easeOut' }}
          onAnimationComplete={() => setLogoDone(true)}
          className="fixed inset-0 z-50 bg-[#f8faf9] flex items-center justify-center"
        >
          <LogoReveal />
        </motion.div>
      )}

      {/* HERO GLOW */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute inset-0 flex justify-center"
      >
        <div className="w-[870px] h-[870px] bg-accent/22 blur-[220px] rounded-full -translate-y-20" />
      </motion.div>

      <HeroSection logoDone={logoDone} heroShiftY={heroShiftY} />
      <SectionOne logoDone={logoDone} />
      <Divider />
      <WhatYouGetSection logoDone={logoDone} />
      <Divider />
      <ProcessWalkthrough logoDone={logoDone} />
      <FullWidthReveal />
      <TestimonialsCarousel />
    </main>
  );
}
