"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="py-32 bg-brand-dark">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Best Apps that We&apos;ve Shipped
          </h2>
        </motion.div>

        {/* Project cards */}
        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden border border-white/5 bg-brand-card hover:border-brand-orange/30 transition-all duration-500"
            >
              {/* Banner image */}
              <div className="relative w-full aspect-[16/7] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent" />
              </div>

              {/* Card body */}
              <div className="p-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <p className="text-brand-orange text-xs font-semibold uppercase tracking-widest mb-2">
                    {project.date}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-white/40 text-sm mb-4">{project.subtitle}</p>
                  <p className="text-white/60 text-sm max-w-xl leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/5 border border-white/10 text-white/60 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right stats + CTA */}
                <div className="flex flex-col gap-4 md:items-end shrink-0">
                  <div className="flex gap-6 md:flex-col md:items-end">
                    {[
                      [project.platform, "Platform"],
                      [project.duration, "Duration"],
                      [project.price,    "Price Range"],
                    ].map(([val, label]) => (
                      <div key={label} className="text-right">
                        <div className="text-white font-bold text-sm">{val}</div>
                        <div className="text-white/30 text-xs">{label}</div>
                      </div>
                    ))}
                  </div>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      className="bg-brand-orange hover:bg-orange-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-105 whitespace-nowrap"
                    >
                      View Live →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
