import { Icon } from '@iconify/react';

export default function ProcessSection() {
  const items = [
    {
      index: '01',
      title: 'Discovery',
      desc: 'Uncovering the core value and shaping the voice before anything is designed.',
      icon: 'lucide:telescope'
    },
    {
      index: '02',
      title: 'Structure',
      desc: 'Architecting the flow so people find what matters without confusion.',
      icon: 'lucide:layout-template'
    },
    {
      index: '03',
      title: 'Design',
      desc: 'Visual crafting that reinforces confidence, style, and premium perception.',
      icon: 'lucide:palette'
    },
    {
      index: '04',
      title: 'Launch',
      desc: 'Clean, fast execution built for performance, SEO, and longevity.',
      icon: 'lucide:rocket'
    }
  ];

  return (
    <section className="py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="font-playfair text-6xl font-semibold">The Process</h2>

      <p className="text-muted/75 max-w-md mt-4 leading-relaxed">
        A structured path from concept to launch.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
        {items.map((step) => (
          <div
            key={step.index}
            className="
              group transition-all duration-300
              border border-tertiary/20 bg-white rounded-sm p-8 relative
              hover:border-accent hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)]
            "
          >
            <div
              className="
                w-12 h-12 rounded-full bg-accent/10 text-accent
                flex items-center justify-center mb-8
                transition-colors duration-300 group-hover:bg-accent group-hover:text-white
              "
            >
              <Icon icon={step.icon} width={20} />
            </div>

            <h3 className="font-inter text-xl font-semibold text-tertiary">
              {step.title}
            </h3>

            <p className="text-sm text-muted/70 mt-2 leading-relaxed">
              {step.desc}
            </p>

            <span
              className="
                text-4xl font-playfair text-tertiary/15
                absolute bottom-6 right-6
                transition-opacity duration-300 group-hover:text-accent/50
              "
            >
              {step.index}
            </span>

            {/* Subtle highlight line on hover */}
            <div
              className="
                absolute -bottom-px left-0 right-0 h-0.5 bg-accent scale-x-0 
                origin-left transition-transform duration-300 group-hover:scale-x-100
              "
            />
          </div>
        ))}
      </div>

      <p className="text-xs text-muted/70 mt-10 italic">
        Most projects move from kickoff to launch in about 2 to 4 weeks
        depending on scope, number of pages, and content readiness.
      </p>
    </section>
  );
}
