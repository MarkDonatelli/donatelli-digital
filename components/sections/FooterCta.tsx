'use client';

export default function FooterCta() {
  return (
    <footer className="bg-primary pt-32 pb-20 px-6 md:px-12 border-t border-border/60">
      <div className="max-w-7xl mx-auto text-center mb-24 text-tertiary">
        <h2 className="font-inter text-6xl md:text-8xl font-bold tracking-tight">
          Ready for a brand that feels
          <span className="relative ml-3 inline-block">
            confident?
            <svg
              className="absolute bottom-[-4px] left-0 w-full h-2"
              viewBox="0 0 200 10"
            >
              <path
                d="M2 6C52 3 154 -2 198 2"
                stroke="#1FC4A7"
                strokeWidth="3"
              />
            </svg>
          </span>
        </h2>

        <p className="text-[15px] md:text-base text-muted/60 mt-6 leading-relaxed">
          Let’s turn your ideas into something clear, organized, and
          market-ready.
        </p>

        <a className="font-inter mt-12 inline-block font-medium px-10 py-4 bg-tertiary text-white tracking-wide border border-tertiary hover:bg-white hover:text-tertiary transition-colors duration-300">
          Schedule Consultation
        </a>

        <p className="text-xs text-muted/50 mt-4">
          No retainers. Straightforward pricing. Clear deliverables.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between border-t border-tertiary/10 pt-10 text-sm text-tertiary">
        <div>
          <span className="font-inter text-xl font-semibold tracking-wide">
            DONATELLI DIGITAL
          </span>
          <p className="text-xs text-muted/50 mt-2">
            © {new Date().getFullYear()} Donatelli Digital
          </p>
        </div>

        <div className="flex gap-8 mt-6 md:mt-0">
          {['Instagram', 'LinkedIn', 'Twitter'].map((link) => (
            <a
              key={link}
              className="hover:text-accent transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
