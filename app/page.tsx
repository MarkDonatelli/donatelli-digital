export default function Home() {
  return (
    <main className="min-h-screen flex-col flex items-center justify-center px-6 py-24">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">Donatelli Digital</h1>

        <p className="text-lg text-gray-300 leading-relaxed">
          Modern, custom websites delivered in days—not weeks. Clean design,
          fast turnaround, and a done-for-you process that makes your brand look
          as good as it should.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <a
            href="#"
            className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Book a Discovery Call
          </a>

          <a
            href="#"
            className="px-6 py-3 border border-gray-600 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition"
          >
            View Templates
          </a>
        </div>
      </div>

      <section className="px-6 mt-10 py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">What You Get</h2>

          <p className="text-gray-300 max-w-2xl mx-auto">
            A modern website that represents your business clearly, looks great
            on every device, and is delivered without delays or confusion.
          </p>

          <div className="grid gap-10 pt-10 md:grid-cols-3 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-400">
                Your website ready in days, not weeks. Streamlined process with
                zero wasted time.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Strong First Impression
              </h3>
              <p className="text-gray-400">
                Clean design that builds trust instantly and represents you
                professionally.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Done For You</h3>
              <p className="text-gray-400">
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
