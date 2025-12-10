'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import ProcessSection from '@/components/sections/ProcessSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

export default function Home() {
  const deliverables = [
    {
      icon: 'lucide:message-square',
      title: 'Clarity of Messaging',
      desc: 'We distill complex business goals into simple language.'
    },
    {
      icon: 'lucide:git-merge',
      title: 'Strategic User Flow',
      desc: 'Paths designed to convert visitors into leads.'
    },
    {
      icon: 'lucide:pen-tool',
      title: 'Custom Editorial Design',
      desc: 'Unique layouts reflecting premium craftsmanship.'
    },
    {
      icon: 'lucide:monitor-smartphone',
      title: 'Responsive Build',
      desc: 'Flawless execution across all devices.'
    }
  ];

  const testimonials = [
    {
      quote:
        'The clarity Donatelli brought to our messy ideas was incredible. The site feels exactly like us.',
      user: 'Sarah Jenkins, CEO',
      avatar: 'bg-gradient-to-tr from-[#3CC7B2] to-[#258A7B]'
    },
    {
      quote:
        'Finally, a studio that understands business goals. Sharp execution, no wasted time.',
      user: 'Mark D., Founder',
      avatar: 'bg-gradient-to-tr from-[#737373] to-[#353535]'
    },
    {
      quote:
        'Organized, calm process. Our platform finally feels premium and investor-ready.',
      user: 'Elena R., Director',
      avatar: 'bg-gradient-to-tr from-[#F5F7F8] to-[#D2D6D9]'
    }
  ];

  return (
    <div className="relative bg-grid-light text-tertiary overflow-hidden font-inter">
      {/* HERO */}
      <section className="relative  pb-32 md:pb-48">
        <div className="absolute top-[-220px] right-[-220px] w-[680px] h-[680px] bg-accent/22 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-260px] -left-60 w-[620px] h-[620px] bg-accent-alt/22 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-4 md:pt-8">
          <p className="uppercase text-lg md:text-xl font-medium tracking-tight">
            Donatelli Digital
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-36 md:pt-48">
          {/* Studio Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full border text-[10px] uppercase tracking-widest text-accent-strong">
            Donatelli Digital — Accepting New Clients
          </div>

          {/* Headline */}
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl leading-[0.92] tracking-tight mt-8 font-semibold">
            Craftsmanship
            <br />
            <span className="italic font-light text-muted/55">meets</span>{' '}
            <span className="relative inline-block font-semibold">
              velocity.
              <svg
                className="absolute  w-full h-4 -bottom-2 left-0"
                viewBox="0 0 200 9"
              >
                <path
                  d="M2 7C52 4 154 -2 198 2"
                  stroke="var(--accent)"
                  strokeWidth="4"
                />
              </svg>
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="mt-10 text-xl md:text-2xl font-light max-w-xl leading-relaxed border-l-2 pl-6 border-accent text-muted">
            We build digital experiences that give brands clarity, confidence
            and a premium presentation. Everything feels organized, intentional
            and delivered with speed.
          </p>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-tertiary text-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 sticky top-32">
            <h2 className="text-xs tracking-widest uppercase text-accent mb-4 flex gap-2 items-center">
              <span className="w-8 h-px bg-accent" /> Our Manifesto
            </h2>

            <p className="text-sm text-border/70 leading-relaxed max-w-xs">
              Less noise. More clarity. Digital experiences shouldn’t
              overwhelm—they should guide and convert.
            </p>
          </div>

          <div className="md:col-span-8 text-border text-4xl md:text-5xl leading-snug space-y-12">
            <p>
              <span className="text-white border-b border-accent/40 pb-1">
                Donatelli Digital brings clarity to your brand.
              </span>{' '}
              We shape scattered ideas into confident, market-ready
              communication.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-white/10 pt-12">
              <div>
                <h4 className="flex gap-2 items-center mb-3">
                  <Icon
                    icon="lucide:minus"
                    className="text-accent"
                    width={16}
                  />
                  Remove the clutter
                </h4>
                <p className="text-sm text-border/70">
                  We eliminate distracting elements so your true value is seen
                  immediately.
                </p>
              </div>

              <div>
                <h4 className="flex gap-2 items-center mb-3">
                  <Icon icon="lucide:plus" className="text-accent" width={16} />
                  Build instant trust
                </h4>
                <p className="text-sm text-border/70">
                  Clear communication increases credibility and improves
                  conversion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="relative bg-tertiary border-y border-tertiary/40 py-6 overflow-hidden">
        {/* LEFT GRADIENT FADE */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-tertiary to-transparent pointer-events-none" />

        {/* RIGHT GRADIENT FADE */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-tertiary to-transparent pointer-events-none" />

        <div className="flex w-max">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            className="flex whitespace-nowrap items-center gap-12 px-6 text-xs tracking-[0.22em] uppercase font-inter text-white/60"
          >
            {['Identity', 'SEO', 'E-Commerce', 'Strategy', 'Web Design'].map(
              (item, i) => (
                <React.Fragment key={`${item}-${i}`}>
                  <span>{item}</span>
                  <span className="text-accent">•</span>
                </React.Fragment>
              )
            )}
          </motion.div>

          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            className="flex whitespace-nowrap items-center gap-12 px-6 text-xs tracking-[0.22em] uppercase font-inter text-white/60"
          >
            {['Identity', 'SEO', 'E-Commerce', 'Strategy', 'Web Design'].map(
              (item, i) => (
                <React.Fragment key={`${item}-${i}`}>
                  <span>{item}</span>
                  <span className="text-accent">•</span>
                </React.Fragment>
              )
            )}
          </motion.div>
        </div>
      </section>

      <ProcessSection />

      {/* DELIVERABLES */}
      <div className="bg-tertiary">
        {' '}
        <section className="py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto ">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div>
              <span className="text-xs uppercase tracking-widest text-accent px-2 py-1 border border-accent/40 rounded-sm">
                Studio Standard
              </span>

              <h2 className="font-playfair text-6xl text-primary font-semibold mt-6">
                More than just a website.
              </h2>

              <p className="text-muted/75 max-w-sm mt-4 leading-relaxed text-primary">
                We deliver a full digital asset that elevates your brand, builds
                trust, and supports measurable business outcomes.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-10 border-b border-accent pb-1 text-accent hover:text-white hover:border-white transition-all"
              >
                Schedule an introduction call
                <Icon icon="lucide:arrow-right" width={16} />
              </a>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-white rounded-sm flex gap-4 shadow-sm">
                <Icon
                  icon="lucide:message-square"
                  className="text-accent"
                  width={22}
                />
                <div>
                  <h4 className="font-semibold text-tertiary">
                    Clarity of Messaging
                  </h4>
                  <p className="text-sm text-muted/70">
                    We translate complex offerings into simple language
                    customers understand.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white rounded-sm flex gap-4 shadow-sm">
                <Icon icon="lucide:route" className="text-accent" width={22} />
                <div>
                  <h4 className="font-semibold text-tertiary">
                    Strategic User Flow
                  </h4>
                  <p className="text-sm text-muted/70">
                    Information structured so visitors instinctively know where
                    to go.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white rounded-sm flex gap-4 shadow-sm">
                <Icon
                  icon="lucide:feather"
                  className="text-accent"
                  width={22}
                />
                <div>
                  <h4 className="font-semibold text-tertiary">
                    Custom Editorial Design
                  </h4>
                  <p className="text-sm text-muted/70">
                    Premium layouts that reflect confidence, detail, and
                    craftsmanship.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white rounded-sm flex gap-4 shadow-sm">
                <Icon
                  icon="lucide:monitor-smartphone"
                  className="text-accent"
                  width={22}
                />
                <div>
                  <h4 className="font-semibold text-tertiary">
                    Responsive Build
                  </h4>
                  <p className="text-sm text-muted/70">
                    Reliable execution optimized for performance and longevity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-white">
        {' '}
        <section
          id="work"
          className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-tertiary/10 pb-8">
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-tertiary">
              Selected Works<span className="text-accent">.</span>
            </h2>
          </div>

          {/* --- 4 Project Cards --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
            {[
              {
                title: 'Venture North',
                img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop',
                tags: ['Finance', 'Strategy']
              },
              {
                title: 'Lumina Architects',
                img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2727&auto=format&fit=crop',
                tags: ['Design', 'Identity'],
                mt: 'md:mt-32'
              },
              {
                title: 'Aero Systems',
                img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2864&auto=format&fit=crop',
                tags: ['SaaS', 'Product']
              },
              {
                title: 'Kanso Living',
                img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
                tags: ['E-Commerce', 'Brand'],
                mt: 'md:mt-32'
              }
            ].map((proj, i) => (
              <div
                key={i}
                className={`group cursor-pointer block ${proj.mt || ''}`}
              >
                <div className="aspect-[16/11] bg-border overflow-hidden mb-8 relative rounded-sm">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur text-tertiary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                    Live Site
                  </div>
                </div>

                <div className="flex justify-between items-end border-b border-tertiary/10 pb-4 group-hover:border-accent transition-colors">
                  <div>
                    <h3 className="text-3xl font-display font-medium text-tertiary mb-2">
                      {proj.title}
                    </h3>
                    <div className="flex gap-3">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-tertiary/5 rounded text-muted/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-tertiary/10 flex items-center justify-center group-hover:bg-tertiary group-hover:text-white transition-all">
                    <Icon
                      icon="lucide:arrow-right"
                      width={18}
                      className="-rotate-45 group-hover:rotate-0 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* TESTIMONIALS */}
      <TestimonialsCarousel />

      {/* FOOTER */}
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
    </div>
  );
}
