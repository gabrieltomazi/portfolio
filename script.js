gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin)


// Função para scroll suave


ScrollSmoother.create({
    smooth: 1,
    effects: true
});


document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
        const target = e.target.getAttribute('href');

        gsap.to(window, {
            duration: 1,
            scrollTo: target,
            ease: "power2.inOut"
        });
    });
});

function enviarMsg(event) {

    event.preventDefault()

    const mensagem = document.getElementById('mensagem').value;

    const telefone = '5548999256706';


    const msgFormatada = encodeURIComponent(mensagem)


    const url = `https://wa.me/${telefone}?text=${msgFormatada}`


    window.open(url, '_blank')

}