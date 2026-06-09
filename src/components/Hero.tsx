import Image from "next/image";

export default function Hero() {
  return (
    <main
      id="inicio"
      className="cabecalho flex min-h-screen flex-col justify-center items-center"
    >
      <Image
        src="/foto-perfil.webp"
        className="foto-perfil w-62.5 h-62.5 shadow-[0_0_20px_--primary] rounded-full border-4 border-(--glass) animate-[float_5s_ease-in-out_infinite]"
        alt="foto-perfil"
        width={250}
        height={250}
        priority
      />
      <h1 className="text-4xl text-(--primary) font-bold m-5">
        Gabriel Tomazi
      </h1>
      <p className="cabecalho-subtitulo text-xl text-(--light)">
        Desenvolvedor Front-End
      </p>
      <div className="icons my-8 mx-0 flex gap-8 ">
        <a
          href="https://github.com/gabrieltomazi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="icon w-16 transition-all duration-300 ease-in-out hover:-translate-y-2.5 "
            id="github"
            src="/github.png"
            alt="github icon"
            width={250}
            height={250}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/gabriel-tomazi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="icon w-16 transition-all duration-300 ease-in-out hover:-translate-y-2.5 "
            id="linkedin"
            src="/linkedin.png"
            alt="linkedin icon"
            width={250}
            height={250}
          />
        </a>
        <a
          href="https://www.instagram.com/gabrieltomazi_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="icon w-16 transition-all duration-300 ease-in-out hover:-translate-y-2.5"
            id="instagram"
            src="/instagram.png"
            alt="instagram icon"
            width={250}
            height={250}
          />
        </a>
      </div>
    </main>
  );
}
