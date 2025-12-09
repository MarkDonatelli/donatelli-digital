'use client';

import Divider from './Divider';
import SectionOne from './sections/SectionOne';
import TestimonialsCarousel from './TestimonialsCarousel';
import WhatYouGetSection from './sections/WhatYouGetSection';
import ProcessWalkthrough from './sections/ProcessWalkthrough';

export default function SectionReveal({ logoDone }: { logoDone: boolean }) {
  return (
    <>
      <SectionOne logoDone={logoDone} />
      <Divider />
      <WhatYouGetSection logoDone={logoDone} />
      <Divider />
      <ProcessWalkthrough logoDone={logoDone} />
      <Divider />
      <TestimonialsCarousel />
    </>
  );
}
