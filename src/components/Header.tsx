export default function Header() {
  return (
    <nav className="navegacao fixed top-0 bg-[rgba(15,23,42, .5)] w-full z-100 p-6">
      <ul className="menu flex list-none gap-12 justify-center text-[1.3rem]">
        <li>
          <a className="menu-link" href="#inicio">
            Início
          </a>
        </li>
        <li>
          <a className="menu-link" href="#sobre">
            Sobre
          </a>
        </li>
        <li>
          <a className="menu-link" href="#projetos">
            Projetos
          </a>
        </li>
        <li>
          <a className="menu-link" href="#contatos">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}
