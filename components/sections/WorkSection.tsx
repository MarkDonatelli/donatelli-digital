/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { Icon } from '@iconify/react';

type Project = {
  title: string;
  img: string;
  link?: string;
  tags: string[];
  mt?: string;
};

export default function WorkSection({ projects }: { projects: Project[] }) {
  return (
    <div className="bg-white">
      <section
        id="work"
        className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-tertiary/10 pb-8">
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-tertiary">
            Selected Works<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
          {projects.map((proj, i) => (
            <a
              href={proj.link}
              target="_blank"
              key={i}
              className={`group cursor-pointer block ${proj.mt || ''}`}
            >
              <div className="aspect-16/11 bg-border overflow-hidden mb-8 relative rounded-sm">
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
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
