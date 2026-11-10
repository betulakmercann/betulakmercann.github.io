
"use client";

import { motion } from "motion/react";

const aboutItems = [
  {
    title: "Software Career",
    text: "Having built nearly two years of full-stack engineering experience by age 21, I have driven standalone projects and collaborated effectively within teams. After exploring diverse areas of software engineering, I have shifted my primary focus and technical foundation into cybersecurity.",
  },
  {
    title: "Before from 2027",
    text: "Focusing my career trajectory on the Blue Team domain, I consistently build hands-on projects and pursue technical certifications in cyber defense. Concurrently, I am advancing my English and German skills to effectively operate in global and multi-lingual professional settings.",
  },

 
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#faf9fc] text-[#17151c]"
    >
      <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-10 sm:px-10 lg:px-16 lg:pb-28">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="border-t border-[#e8e4ec] pt-10 lg:pt-12"
        >
          <div className="grid gap-10 lg:grid-cols-[0.32fr_1fr] lg:gap-16">
            <div>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-[#17151c]">
                A little about me.
              </h2>

              <p className="mt-4 max-w-[250px] text-sm leading-[1.9] text-[#77717f]">
                A closer look at my interests, technical focus, and approach
                to cybersecurity.
              </p>
            </div>

            <div className="grid gap-x-12 gap-y-9 sm:grid-cols-2">

              {aboutItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 2) * 0.1,
                  }}
                  className="border-t border-[#e8e4ec] pt-4"
                >
                  <h3 className="text-sm font-semibold tracking-[-0.02em] text-[#292331]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-[1.9] text-[#77717f]">
                    {item.text}
                  </p>
                </motion.div>
              ))}

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
