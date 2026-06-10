"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
  const message = "Olá Gabriel! Vi seu portfólio e gostaria de conversar!";

  const telefone = "5548999256706";

  const contactItems = [
    {
      id: 1,
      title: "Email",
      value: "gtomazi193@gmail.com",
      link: "mailto:gtomazi193@gmail.com",
      icon: <MdOutlineEmail size={24} fill="#6D4EB3" />,
    },
    {
      id: 2,
      title: "WhatsApp",
      value: "(48) 99925-6706",
      link: `https://wa.me/${telefone}?text=${encodeURIComponent(message)}`,
      icon: <FaWhatsapp size={24} fill="#6D4EB3" />,
    },
    {
      id: 3,
      title: "GitHub",
      value: "github.com/gabrieltomazi",
      link: "https://github.com/gabrieltomazi",
      icon: <FaGithub size={24} fill="#6D4EB3" />,
    },
    {
      id: 4,
      title: "LinkedIn",
      value: "linkedin.com/in/gabriel-tomazi",
      link: "https://linkedin.com/in/gabriel-tomazi",
      icon: <FaLinkedin size={24} fill="#6D4EB3" />,
    },
  ];

  return (
    <section id="contatos" className="contatos py-24 px-8">
      <h2 className="contatos-titulo text-center text-[2.5rem] mb-12.5">
        Entre em Contato
      </h2>

      <form
        className="formulario-contato max-w-150 mx-auto bg-[rgba(255,255,255, 0.05)] backdrop-blur-[10px] p-8 border border-solid border-(--glass) rounded-2xl"
        id="formulario"
      >
        <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>

        <div className="space-y-4">
          {contactItems.map((item) => (
            <div key={item.id} className="flex gap-4">
              <Link
                target="_blank"
                href={item.link}
                className="flex justify-center items-center w-12 h-12 bg-[#251B3D] rounded-full"
              >
                <div>{item.icon}</div>
              </Link>
              <div>
                <p className="text-[#6D4EB3]">{item.title}</p>
                <Link target="_blank" href={item.link}>
                  <p className="text-xs md:text-base">{item.value}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </form>
    </section>
  );
}
