'use client';

import HeroDesign from '@/components/sections/HeroDesign';
import ManifestoSection from '@/components/sections/ManifestoSection';
import MarqueeStrip from '@/components/sections/MarqueeStrip';
import ProcessSection from '@/components/sections/ProcessSection';
import DeliverablesSection from '@/components/sections/DeliverablesSection';
import WorkSection from '@/components/sections/WorkSection';
import FooterCta from '@/components/sections/FooterCta';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

const projects = [
  {
    title: 'Venture North',
    img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop',
    tags: ['Finance', 'Strategy']
  },
  {
    title: 'Lumina Architects',
    img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2727&auto=format&fit=crop',
    tags: ['Design', 'Identity'],
    mt: 'md:mt-32'
  },
  {
    title: 'Aero Systems',
    img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2864&auto=format&fit=crop',
    tags: ['SaaS', 'Product']
  },
  {
    title: 'Kanso Living',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
    tags: ['E-Commerce', 'Brand'],
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
  return (
    <div className="relative bg-grid-light text-tertiary overflow-hidden font-inter">
      <HeroDesign />
      <ManifestoSection />
      <MarqueeStrip items={marqueeItems} />
      <ProcessSection />
      <DeliverablesSection />
      <WorkSection projects={projects} />
      <TestimonialsCarousel />
      <FooterCta />
    </div>
  );
}
