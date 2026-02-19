import Link from 'next/link';

export default function KansoLivingCaseStudy() {
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
              Kanso Living
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-secondary">
              Kanso Living is a self-initiated lifestyle commerce concept
              designed to blend editorial storytelling with product-focused
              shopping flows.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-secondary mt-4">
              The goal was to build a premium yet warm digital experience with
              modular sections that support campaigns, category growth, and
              everyday merchandising.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="aspect-[16/11] overflow-hidden rounded-sm bg-border">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
                alt="Kanso Living hero concept"
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
              Lifestyle brands often struggle to balance aesthetic storytelling
              with shopping clarity. This concept explores how to present
              products, values, and collections in a way that feels curated but
              still drives confident purchase decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-display mb-4">My Role</h2>
            <ul className="space-y-2 text-base md:text-lg text-secondary">
              <li>• Brand direction</li>
              <li>• Visual and layout design</li>
              <li>• Commerce UX planning</li>
              <li>• Front-end component and system thinking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-display mb-4">
              Scope &amp; Deliverables
            </h2>
            <ul className="space-y-2 text-base md:text-lg text-secondary">
              <li>• Editorial-style homepage concept</li>
              <li>• Modular product and collection sections</li>
              <li>• Reusable content blocks for campaigns</li>
              <li>• Responsive structure for mobile-first commerce</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-display mb-6">Visuals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2 aspect-[16/9] rounded-sm overflow-hidden bg-border">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
                  alt="Kanso Living hero mockup"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-border">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop"
                  alt="Kanso Living product grid detail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-border">
                <img
                  src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=2670&auto=format&fit=crop"
                  alt="Kanso Living typography and brand detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          <section className="border-t border-tertiary/10 pt-10">
            <h2 className="text-2xl md:text-3xl font-display mb-4">Outcome</h2>
            <p className="text-base md:text-lg leading-relaxed text-secondary max-w-4xl">
              This concept demonstrates how a warm brand voice and clear
              commerce architecture can work together to elevate perception and
              improve navigational ease.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
