import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      name: "TechStore",
      link: "https://gabrieltomazi.github.io/TechStore/",
      image: "/projeto1.png",
      description:
        "Este projeto é um carrossel de produtos para simular a vitrine digital de uma loja de tecnologia.",
    },
    {
      name: "Stranger Things: The Experience",
      link: "https://gabrieltomazi.github.io/strangerthings-lp/",
      image: "/projeto2.png",
      description:
        "Um projeto interativo de interface web inspirado na série Stranger Things da Netflix.",
    },
    {
      name: "Weather API",
      link: "https://gabrieltomazi.github.io/weather-api/",
      image: "/projeto3.png",
      description:
        "O Weather API é uma aplicação web simples e funcional que permite aos usuários consultar informações climáticas de qualquer cidade do mundo em tempo real.",
    },
  ];

  return (
    <section
      id="projetos"
      className="projetos h-full py-24 px-4 overflow-hidden"
    >
      <h2 className="projetos-titulo text-center text-[2.5rem] mb-12.5">
        Meus Projetos
      </h2>
      <div className="projetos-caixa grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 max-w-300 my-0 mx-auto">
        {projects.map((project) => (
          <div
            key={project.name}
            className="projetos-card bg-[rgba(255,255,255, 0.05)] rounded-2xl backdrop-blur[5px] border border-solid border-(--glass) overflow-hidden cursor-pointer transition-[scale] duration-300 ease-in-out hover:scale-110"
          >
            <a href={project.link}>
              <Image
                src={project.image}
                alt={project.name}
                className="projetos-imagem h-50 w-full"
                width={200}
                height={200}
              />
              <div className="caixa-textos-projeto p-5">
                <h3 className="info-projetos font-bold mb-1.25">
                  {project.name}
                </h3>
                <p className="paragrafo-projetos text-[rgba(226,232,240, .8)] leading-tight">
                  {project.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
