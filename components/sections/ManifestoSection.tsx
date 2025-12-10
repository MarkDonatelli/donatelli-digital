'use client';

import React from 'react';
import { Icon } from '@iconify/react';

export default function ManifestoSection() {
  return (
    <section className="bg-tertiary text-white py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4 sticky top-32">
          <h2 className="text-xs tracking-widest uppercase text-accent mb-4 flex gap-2 items-center">
            <span className="w-8 h-px bg-accent" /> Our Manifesto
          </h2>
          <p className="text-sm text-border/70 leading-relaxed max-w-xs">
            Less noise. More clarity. Digital experiences shouldn’t overwhelm—they should guide
            and convert.
          </p>
        </div>

        <div className="md:col-span-8 text-border text-4xl md:text-5xl leading-snug space-y-12">
          <p>
            <span className="text-white border-b border-accent/40 pb-1">
              Donatelli Digital brings clarity to your brand.
            </span>{' '}
            We shape scattered ideas into confident, market-ready communication.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-white/10 pt-12">
            <div>
              <h4 className="flex gap-2 items-center mb-3">
                <Icon icon="lucide:minus" className="text-accent" width={16} />
                Remove the clutter
              </h4>
              <p className="text-sm text-border/70">
                We eliminate distracting elements so your true value is seen immediately.
              </p>
            </div>

            <div>
              <h4 className="flex gap-2 items-center mb-3">
                <Icon icon="lucide:plus" className="text-accent" width={16} />
                Build instant trust
              </h4>
              <p className="text-sm text-border/70">
                Clear communication increases credibility and improves conversion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
