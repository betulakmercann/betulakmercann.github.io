"use client";

import { useRef } from "react";

const featuredProjects = [
  {
    title: "InjecAsst",
    description:
      "InjecAsst is a Python-based modular CLI tool developed to assess web application security mechanisms. It analyzes authentication mechanisms through Login Analyzer, maps application entry points using Endpoint Mapper and Parameter Mapper, and displays database information through Database Printer. It supports SQL injection testing and analysis with SQLi Surface Mapper, SQLi Validation & Evidence Analyzer, and SQL Payload Transformer. Additionally, Resource / Response Scanner examines application resources and HTTP response behaviors. With JSON-based reporting and an extensible architecture, InjecAsst brings multiple security assessment tools together through a unified command-line interface.",
    image: "/images/featured/foto.png",
    link: "https://github.com/betulakmercann/Injecasst",
  },
];

export default function Featured() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    sliderRef.current?.scrollBy({
      left: direction === "right" ? 450 : -450,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white px-6 py-16 text-black md:px-12">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">
            Selected Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Featured Projects<span className="text-purple-600">.</span>
          </h2>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => handleScroll("left")}
            aria-label="Previous projects"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:border-purple-600 hover:bg-purple-600 hover:text-white"
          >
            ←
          </button>
          <button
            onClick={() => handleScroll("right")}
            aria-label="Next projects"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:border-purple-600 hover:bg-purple-600 hover:text-white"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
      >
        {featuredProjects.map((project, index) => (
          <article
            key={project.title}
            className="w-[85%] min-w-[300px] max-w-[450px] flex-shrink-0 snap-start overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:border-purple-200 md:w-[450px]"
          >
            <div className="relative aspect-video overflow-hidden bg-gray-100">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-start justify-between gap-4 p-5">
              <div>
                <h3 className="mb-3 text-lg font-bold">{project.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {project.description}
                </p>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title}`}
                className="text-xl text-purple-600"
              >
                ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}