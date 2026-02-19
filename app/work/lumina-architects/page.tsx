import Link from 'next/link';

export default function LuminaArchitectsCaseStudy() {
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
              Lumina Architects
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-secondary">
              Lumina Architects is a self-initiated brand and website concept
              exploring a refined, minimalist digital presence for a modern
              architecture studio.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-secondary mt-4">
              The goal was to create a calm, spatial layout system that
              emphasizes imagery, hierarchy, and restraint while remaining
              flexible for future growth.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="aspect-[16/11] overflow-hidden rounded-sm bg-border">
              <img
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2727&auto=format&fit=crop"
                alt="Lumina Architects hero concept"
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
              Many architecture websites either over-design or
              under-communicate. This concept explores how a studio could
              present work, philosophy, and services with clarity while letting
              the architecture speak for itself.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-display mb-4">My Role</h2>
            <ul className="space-y-2 text-base md:text-lg text-secondary">
              <li>• Brand direction</li>
              <li>• Visual design</li>
              <li>• Layout and interaction design</li>
              <li>• Front-end structure and component planning</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-display mb-4">
              Scope &amp; Deliverables
            </h2>
            <ul className="space-y-2 text-base md:text-lg text-secondary">
              <li>• Homepage layout focused on imagery and typography</li>
              <li>• Modular content sections for projects and services</li>
              <li>• Responsive grid and spacing system</li>
              <li>• Reusable front-end components designed for scalability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-display mb-6">Visuals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2 aspect-video rounded-sm overflow-hidden bg-border">
                <img
                  src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2670&auto=format&fit=crop"
                  alt="Lumina hero mockup"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-4/3 rounded-sm overflow-hidden bg-border">
                <img
                  src="https://plus.unsplash.com/premium_photo-1706571538383-a948c074e941?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kb29yJTIwc3R1ZGlvJTIwYXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww"
                  alt="Lumina projects grid detail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-4/3 rounded-sm overflow-hidden bg-border">
                <img
                  src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=2070&auto=format&fit=crop"
                  alt="Lumina typography and spacing detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          <section className="border-t border-tertiary/10 pt-10">
            <h2 className="text-2xl md:text-3xl font-display mb-4">Outcome</h2>
            <p className="text-base md:text-lg leading-relaxed text-secondary max-w-4xl">
              This concept demonstrates how a clean brand system and thoughtful
              front-end structure can support content-heavy portfolios without
              overwhelming the user.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
