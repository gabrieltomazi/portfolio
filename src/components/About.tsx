export default function About() {
  return (
    <section id="sobre" className="sobre h-[80vh] pb-24 mt-36 px-8">
      <h2 className="sobre-titulo text-[3rem] text-(--light) text-center mb-5">
        Sobre mim
      </h2>
      <div className="sobre-caixa p-8 max-w-200 my-0 mx-auto rounded-2xl border border-solid border-(--glass) backdrop-blur-[10px] bg-[255,255,255,0.05]">
        <p className="sobre-paragrafo text-center text-[1.2rem]">
          Olá! Sou o Gabriel Tomazi, <b>Desenvolvedor Front-End</b> apaixonado
          por transformar linhas de código em interfaces intuitivas e
          eficientes. Atualmente curso Engenharia de Software na SATC e
          aprofundo minhas competências técnicas no DevClub, focando sempre em
          entregar soluções que unam performance e design.
        </p>
      </div>
    </section>
  );
}
