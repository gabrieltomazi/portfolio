export default function Contact() {
  return (
    <section id="contatos" className="contatos pb-40">
      <h2 className="contatos-titulo text-center text-[2.5rem] mb-12.5">
        Entre em Contato
      </h2>

      <form
        className="formulario-contato max-w-150 mx-auto bg-[rgba(255,255,255, 0.05)] backdrop-blur-[10px] p-8 border border-solid border-(--glass) rounded-2xl"
        id="formulario"
        onSubmit="enviarMsg(event)"
      >
        <div className="grupo-form">
          <input
            type="name"
            placeholder="Nome"
            id="nome"
            className="campo-form w-full p-4 mb-4 bg-[rgba(255,255,255, 0.05)] rounded-lg text-(--light) border border-solid border-(--glass) outline-none transition-all duration-300 ease-in-out focus:border-(--secondary) focus:shadow-[0_0_10px_rgba(79,70,229,0.3)]"
          />
        </div>

        <div className="grupo-form mb-6">
          <textarea
            className="campo-form w-full p-4 bg-[rgba(255,255,255, 0.05)] rounded-lg text-(--light) border border-solid border-(--glass) outline-none transition-colors duration-1000 ease-in-out focus:border-(--secondary) focus:shadow-[0_0_10px_rgba(79,70,229,0.3)] resize-y"
            rows={5}
            id="mensagem"
            placeholder="Digite sua Mensagem"
          ></textarea>
        </div>

        <button
          type="submit"
          className="botao-form text-(--light) bg-linear-to-tr from-(--primary) to-(--secondary) py-4 px-8 border-none rounded-lg cursor-pointer font-bold 
          w-full transition-all duration-500 
          ease-in-out hover:-translate-y-1 hover:shadow-[0_5px_5px_rgba(79,70,229, .4)]"
        >
          Enviar WhatsApp
        </button>
      </form>
    </section>
  );
}
