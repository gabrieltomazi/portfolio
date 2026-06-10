"use client"

import Image from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { LuMouse } from "react-icons/lu";
import { handleScroll } from "@/utils/scroll";

export default function Hero() {
  return (
    <main
      id="inicio"
      className="cabecalho flex min-h-screen flex-col justify-center items-center pt-24"
    >
      <Image
        src="/foto-perfil.webp"
        className="foto-perfil w-37.5 md:w-62.5 shadow-[0_0_20px_--primary] 
        rounded-full border-4 h-auto object-cover border-(--glass) animate-[float_5s_ease-in-out_infinite]"
        alt="foto-perfil"
        width={250}
        height={250}
        priority
      />
      <h1 className="text-(--primary) text-center text-[2rem] md:text-[3.5rem] font-bold m-5">
        Gabriel Tomazi
      </h1>
      <p className="cabecalho-subtitulo text-[1rem] md:text-[1.5rem] text-(--light)">
        Desenvolvedor Front-End
      </p>
      <div className="icons my-8 mx-0 flex gap-8 ">
        <Link
          href="https://github.com/gabrieltomazi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="icon w-12 md:w-16 transition-all duration-300 ease-in-out h-auto object-cover hover:-translate-y-2.5 hover:drop-shadow-[0_0_1rem_#fff] "
            id="github"
            src="/github.png"
            alt="github icon"
            width={250}
            height={250}
            priority
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/gabriel-tomazi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="icon w-12 md:w-16 transition-all duration-300 ease-in-out h-auto object-cover hover:-translate-y-2.5 hover:drop-shadow-[0_0_1rem_#0077b5]"
            id="linkedin"
            src="/linkedin.png"
            alt="linkedin icon"
            width={250}
            height={250}
            priority
          />
        </Link>
        <Link
          href="https://www.instagram.com/gabrieltomazi_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="icon w-12 md:w-16 transition-all duration-300 ease-in-out h-auto object-cover hover:-translate-y-2.5 hover:drop-shadow-[0_0_1rem_#E1306C]"
            id="instagram"
            src="/instagram.png"
            alt="instagram icon"
            width={250}
            height={250}
            priority
          />
        </Link>
      </div>
      <Link
        href="#sobre"
        onClick={(e) => handleScroll(e, "#sobre")}
        className="flex flex-col items-center gap-2 animate-[float_2s_ease-in-out_infinite]">
        <LuMouse
          className="mt-10"
          size="2rem"
        />
        <FaArrowDown />
      </Link>
    </main>
  );
}
