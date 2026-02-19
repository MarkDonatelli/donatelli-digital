'use client';

import { useState } from 'react';

import HeroDesign from '@/components/sections/HeroDesign';
import ManifestoSection from '@/components/sections/ManifestoSection';
import MarqueeStrip from '@/components/sections/MarqueeStrip';
import ProcessSection from '@/components/sections/ProcessSection';
import DeliverablesSection from '@/components/sections/DeliverablesSection';
import WorkSection from '@/components/sections/WorkSection';
import FooterCta from '@/components/sections/FooterCta';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import ContactModal from '@/components/ContactModal';

const projects = [
  {
    link: '/work/lumina-architects',
    title: 'Lumina Architects',
    subtitle: 'Brand Identity + Website Concept',
    img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2727&auto=format&fit=crop',
    tags: ['Concept', 'Identity', 'Front-End']
  },
  {
    link: 'https://www.turnitupcoverband.com',
    title: 'Turn It Up!',
    subtitle: 'Web Design + Development',
    img: 'images/tiu-home.webp',
    tags: ['Client', 'Design', 'Development'],
    external: true,
    badgeLabel: 'Live Site',
    mt: 'md:mt-32'
  },
  {
    link: '/work/aero-systems',
    title: 'Aero Systems',
    subtitle: 'SaaS Website Concept',
    img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2864&auto=format&fit=crop',
    tags: ['Concept', 'SaaS', 'Product']
  },
  {
    link: '/work/kanso-living',
    title: 'Kanso Living',
    subtitle: 'Lifestyle Commerce Concept',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
    tags: ['Concept', 'E-Commerce', 'Brand'],
    mt: 'md:mt-32'
  }
];

const marqueeItems = [
  'Identity',
  'SEO',
  'E-Commerce',
  'Strategy',
  'Web Design'
];

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="relative bg-grid-light text-tertiary overflow-hidden font-inter">
      <HeroDesign onOpenContact={() => setContactOpen(true)} />
      <ManifestoSection />
      <MarqueeStrip items={marqueeItems} />
      <ProcessSection />
      <DeliverablesSection onOpenContact={() => setContactOpen(true)} />
      <WorkSection projects={projects} />
      <TestimonialsCarousel />
      <FooterCta onOpenContact={() => setContactOpen(true)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
