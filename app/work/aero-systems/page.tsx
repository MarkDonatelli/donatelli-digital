import Link from 'next/link';

export default function AeroSystemsCaseStudy() {
  return (
    <main className="min-h-screen bg-primary text-tertiary">
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="mb-10 md:mb-14">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted/80 hover:text-tertiary transition-colors"
          >
            <span>Back to Selected Works</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start mb-20">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted/70 mb-4">
              Project Overview
            </p>
            <h1 className="text-4xl md:text-6xl font-display leading-tight mb-6">
              Aero Systems
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-secondary">
              Aero Systems is a self-initiated SaaS brand and website concept
              built to present a technical product with precision and trust.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-secondary mt-4">
              The objective was to create a high-clarity, conversion-minded
              interface that balances product credibility, speed of
              understanding, and scalable front-end structure.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="aspect-[16/11] overflow-hidden rounded-sm bg-border">
              <img
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2864&auto=format&fit=crop"
                alt="Aero Systems hero concept"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl md:text-3xl font-display mb-4">
              The Challenge
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-secondary max-w-4xl">
              Many SaaS websites either overwhelm users with features or stay
              too generic to differentiate. This concept explores how to
              communicate product value quickly while preserving visual
              confidence and a clear conversion path.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-display mb-4">My Role</h2>
            <ul className="space-y-2 text-base md:text-lg text-secondary">
              <li>• Brand direction</li>
              <li>• UX and visual design</li>
              <li>• Conversion-focused content hierarchy</li>
              <li>• Front-end component and layout planning</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-display mb-4">
              Scope &amp; Deliverables
            </h2>
            <ul className="space-y-2 text-base md:text-lg text-secondary">
              <li>• Homepage concept with product-first messaging</li>
              <li>• Feature and solution section architecture</li>
              <li>• Reusable CTA and trust-component patterns</li>
              <li>• Responsive grid and spacing system for scale</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-display mb-6">Visuals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2 aspect-[16/9] rounded-sm overflow-hidden bg-border">
                <img
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2864&auto=format&fit=crop"
                  alt="Aero Systems hero mockup"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-border">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2670&auto=format&fit=crop"
                  alt="Aero Systems dashboard detail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-border">
                <img
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2670&auto=format&fit=crop"
                  alt="Aero Systems interface structure detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          <section className="border-t border-tertiary/10 pt-10">
            <h2 className="text-2xl md:text-3xl font-display mb-4">Outcome</h2>
            <p className="text-base md:text-lg leading-relaxed text-secondary max-w-4xl">
              This concept demonstrates how strategic structure and restrained
              visual language can make complex SaaS offerings easier to
              understand and easier to trust.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
