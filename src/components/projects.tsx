
import Image from "next/image";

const projects = [
  {
    number: "01",
    category: "BLUE TEAM RESEARCHES",
    title: "Researches",
    description:
      "Web uygulamalarındaki giriş mekanizmalarını analiz etmek ve güvenlik kontrollerini değerlendirmek için geliştirilen bir araç.",
    image: "/images/projects/proje-5.png",
    technologies: ["Cyber Security", "SIEM", "Windows Security"],
  },
  {
    number: "02",
    category: "SIEM - BLUE TEAM",
    title: "WAZUH Home Lab",
    description:
      "Web uygulamalarındaki endpoint yapılarını keşfetmek ve analiz sürecini kolaylaştırmak için geliştirilen bir araç.",
    image: "/images/projects/proje-2.png",
    technologies: ["Sysmon", "Wazuh", "SIEM/XDR", "Active Directory", "Server Manager", "Linux", "Windows Server 2025"],
  },
  {
    number: "03",
    category: "NETWORK TRAFFIC ANALYSIS",
    title: "Analysis with Wireshark & Zeek",
    description:
      "Siber güvenlik alanındaki teknik araştırmaları, uygulamalı deneyleri ve bağımsız çalışmaları kapsayan araştırma projeleri.",
    image: "/images/projects/proje-3.png",
    technologies: ["Wireshark", "Zeek", "Mitre Attack"],
  },
  {
    number: "04",
    category: "SQL INJECTION",
    title: "Injecasst",
    description:
      "Web uygulamalarındaki endpoint yapılarını keşfetmek ve analiz sürecini kolaylaştırmak için geliştirilen bir araç.",
    image: "/images/projects/proje-4.png",
    technologies: ["Python", "Linux", "SQL Injection"],
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#faf9fc] px-6 pb-10 py-10 text-[#17151d] md:px-12"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Some of my projects
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-7 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.number} className="group">

              <div className="relative aspect-[16/10] overflow-hidden bg-[#eeedf1]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="mt-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs tracking-widest text-purple-600">
                    {project.category} / {project.number}
                  </span>

                  <span className="h-px w-10 bg-gray-300 transition-all duration-300 group-hover:w-16 group-hover:bg-purple-600" />
                </div>

                <h3 className="text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-500">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="border border-gray-200 px-3 py-1.5 text-[11px] tracking-wide text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
