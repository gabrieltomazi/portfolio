"use client"

import Link from 'next/link';
import { handleScroll } from '@/utils/scroll';

export default function Header() {



  return (
    <nav className="navegacao fixed top-0 bg-[rgba(15,23,42, .5)] w-full z-100 p-6">
      <ul className="menu flex list-none gap-12 justify-center text-[1.3rem]">
        <li>
          <Link className="menu-link" onClick={(e) => handleScroll(e, "#inicio")} href="#inicio">
            Início
          </Link>
        </li>
        <li>
          <Link className="menu-link" onClick={(e) => handleScroll(e, "#sobre")} href="#sobre">
            Sobre
          </Link>
        </li>
        <li>
          <Link className="menu-link" onClick={(e) => handleScroll(e, "#projetos")} href="#projetos">
            Projetos
          </Link>
        </li>
        <li>
          <Link className="menu-link" onClick={(e) => handleScroll(e, "#contatos")} href="#contatos">
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}
