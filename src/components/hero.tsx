
"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#faf9fc] text-[#17151c]"
    >
      <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-16 sm:px-10 lg:px-16 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 order-2 lg:order-1"
          >
            <h1 className="text-[clamp(3.8rem,8vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.075em] text-[#17151c]">
              Betül
              <br />
              Akmercan<span className="text-[#9365d8]">.</span>
            </h1>

            <div className="mt-10 flex flex-wrap items-center gap-7">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 border-b border-[#8b5cf6] pb-2 text-sm font-semibold text-[#292331] transition hover:text-[#8b5cf6]"
              >
                Explore my work
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>

              <a
                href="https://github.com/betulakmercann"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[#77717f] transition hover:text-[#8b5cf6]"
              >
                GitHub ↗
              </a>

              <a
                href="https://medium.com/@betulakmercan"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[#77717f] transition hover:text-[#8b5cf6]"
              >
                Medium ↗
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="relative order-1 flex h-[390px] items-end justify-center sm:h-[520px] lg:order-2 lg:h-[650px] -translate-y-6"
          >
            <div className="pointer-events-none absolute right-[8%] top-[12%] h-[340px] w-[340px] rounded-full bg-[#e9ddfa] opacity-70 blur-[90px]" />

            <div className="pointer-events-none absolute right-[5%] top-[14%] h-[72%] w-[72%] rounded-full border border-[#ded3ed]" />

            <div className="pointer-events-none absolute bottom-[8%] left-[4%] h-px w-[85%] bg-gradient-to-r from-transparent via-[#c8b3e5] to-transparent" />

            <div className="relative z-10 h-full w-full max-w-[560px]">
              <Image
                src="/images/profile/p1.png"
                alt="Betül Akmercan"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-bottom"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
