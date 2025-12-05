export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-primary text-tertiary">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight text-tertiary">
          Donatelli Digital
        </h1>

        <p className="text-lg leading-relaxed text-secondary">
          Modern, custom websites delivered in days—not weeks. Clean design,
          fast turnaround, and a done-for-you process that makes your brand look
          as good as it should.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 pt-4">
          {/* Primary CTA */}
          <a
            href="#"
            className="px-6 py-3 rounded-lg font-semibold bg-accent text-primary hover:bg-accent-hover transition"
          >
            Book a Discovery Call
          </a>

          {/* Secondary CTA */}
          <a
            href="#"
            className="px-6 py-3 rounded-lg font-semibold border border-accent text-accent hover:bg-accent hover:text-primary transition"
          >
            View Templates
          </a>
        </div>
      </div>

      <section className="px-6 mt-16 py-24 w-full bg-tertiary text-primary">
        <div className="max-w-4xl mx-auto space-y-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight">What You Get</h2>

          <p className="max-w-2xl mx-auto leading-relaxed text-secondary">
            A modern website that represents your business clearly, looks great
            on every device, and is delivered without delays or confusion.
          </p>

          <div className="grid gap-10 pt-10 md:grid-cols-3 text-left">
            <div className="p-6 rounded-lg border border-border bg-primary text-tertiary hover:bg-primary-hover transition">
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-secondary">
                Your website ready in days, not weeks. Streamlined process with
                zero wasted time.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-primary text-tertiary hover:bg-primary-hover transition">
              <h3 className="text-xl font-semibold mb-2">
                Strong First Impression
              </h3>
              <p className="text-secondary">
                Clean design that builds trust instantly and represents you
                professionally.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-primary text-tertiary hover:bg-primary-hover transition">
              <h3 className="text-xl font-semibold mb-2">Done For You</h3>
              <p className="text-secondary">
                No tech headaches—hosting, setup, analytics, and structure
                handled end-to-end.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
