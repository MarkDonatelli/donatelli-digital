'use client';

import { Icon } from '@iconify/react';

export default function HeroDesign() {
  return (
    <section className="relative pb-32 md:pb-48">
      <div className="absolute top-[-220px] right-[-220px] w-[680px] h-[680px] bg-accent/22 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-260px] -left-60 w-[620px] h-[620px] bg-accent-alt/22 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-4 md:pt-8">
        <p className="uppercase text-lg md:text-xl font-medium tracking-tight">
          Donatelli Digital
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-36 md:pt-48">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full border text-[10px] uppercase tracking-widest text-accent-strong">
          Accepting New Clients
        </div>

        <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl leading-[0.92] tracking-tight mt-8 font-semibold">
          Craftsmanship
          <br />
          <span className="italic font-light text-muted/55">meets</span>{' '}
          <span className="relative inline-block font-semibold">
            velocity.
            <svg
              className="absolute w-full h-4 -bottom-2 left-0"
              viewBox="0 0 200 9"
            >
              <path
                d="M2 7C52 4 154 -2 198 2"
                stroke="var(--accent)"
                strokeWidth="4"
              />
            </svg>
          </span>
        </h1>

        <p className="mt-10 text-xl md:text-2xl font-light max-w-xl leading-relaxed border-l-2 pl-6 border-accent text-muted">
          We build digital experiences that give brands clarity, confidence and
          a premium presentation. Everything feels organized, intentional and
          delivered with speed.
        </p>

        <div className="flex flex-wrap  items-center gap-4 mt-12">
          <a
            href="#work"
            className="px-8 py-4 bg-tertiary text-white font-semibold tracking-wide inline-flex items-center gap-2 shadow-sm hover:bg-accent/90 transition"
          >
            View Our Work
            <Icon icon="lucide:arrow-right" width={18} />
          </a>

          <a
            href="#process"
            className="px-8 py-4 border border-tertiary text-tertiary bg-white font-medium tracking-wide inline-flex items-center gap-2 hover:border-accent hover:text-accent transition"
          >
            How We Work
          </a>
        </div>
      </div>
    </section>
  );
}
