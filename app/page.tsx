export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24">
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
    </main>
  );
}
