'use client';

import { Icon } from '@iconify/react';

export default function DeliverablesSection() {
  return (
    <section className="bg-tertiary text-white py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {/* LEFT SIDE */}
        <div className="sticky top-32">
          <span className="inline-block text-[10px] px-3 py-1 uppercase border border-accent text-accent shadow-sm mb-6 rounded-full tracking-[0.14em]">
            Studio Standard
          </span>

          <h2 className="text-5xl font-playfair font-medium mb-6 leading-tight">
            More than just
            <br />a website.
          </h2>

          <p className="text-lg text-border/85 max-w-sm leading-relaxed">
            We build brand-aligned digital experiences that create clarity,
            confidence, and measurable results.
          </p>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white/60 hover:text-accent hover:border-accent transition-colors"
          >
            Start a conversation
            <Icon icon="lucide:arrow-right" width={18} />
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4">
          {/* ITEM 1 */}
          <div className="group bg-white p-6 border border-white/10 rounded-sm hover:border-accent hover:shadow-md transition-all duration-300 flex items-start gap-4 text-tertiary">
            <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
              <Icon
                icon="lucide:message-square"
                className="text-accent group-hover:text-white"
                width={18}
              />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Clarity of Messaging</h4>
              <p className="text-sm text-muted/75">
                We turn complexity into simple, persuasive language your
                audience understands immediately.
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="group bg-white p-6 border border-white/10 rounded-sm hover:border-accent hover:shadow-md transition-all duration-300 flex items-start gap-4 text-tertiary">
            <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
              <Icon
                icon="lucide:route"
                className="text-accent group-hover:text-white"
                width={18}
              />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Strategic User Flow</h4>
              <p className="text-sm text-muted/75">
                Intentional pathways that turn visitors into inquiries, signups,
                and loyal customers.
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="group bg-white p-6 border border-white/10 rounded-sm hover:border-accent hover:shadow-md transition-all duration-300 flex items-start gap-4 text-tertiary">
            <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
              <Icon
                icon="lucide:pen-tool"
                className="text-accent group-hover:text-white"
                width={18}
              />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Custom Editorial Design</h4>
              <p className="text-sm text-muted/75">
                Layouts shaped by tone, personality, and premium visual
                intent—not templates.
              </p>
            </div>
          </div>

          {/* ITEM 4 */}
          <div className="group bg-white p-6 border border-white/10 rounded-sm hover:border-accent hover:shadow-md transition-all duration-300 flex items-start gap-4 text-tertiary">
            <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
              <Icon
                icon="lucide:laptop"
                className="text-accent group-hover:text-white"
                width={18}
              />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Responsive Build</h4>
              <p className="text-sm text-muted/75">
                Fast, durable, SEO-ready execution that performs across every
                device and stage of growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
