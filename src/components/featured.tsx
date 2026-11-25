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
    return (
      <section className="w-full bg-white px-6 py-12 text-black md:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="flex w-full flex-col gap-6 md:flex-row md:items-center md:gap-12"
            >
              <div className="w-full overflow-hidden rounded-xl bg-gray-100 md:w-[55%]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-video h-full w-full object-cover"
                />
              </div>
  
              <div className="flex-1">
                <h2 className="mb-5 text-2xl font-bold tracking-tight md:text-3xl">
                  {project.title}
                  <span className="text-purple-600">.</span>
                </h2>
  
                <p className="text-sm leading-7 text-gray-600">
                  {project.description}
                </p>
  
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-600 transition hover:text-purple-800"
                >
                  View on GitHub
                  <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }