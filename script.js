gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin)


// Função para scroll suave


ScrollSmoother.create({
    smooth: 1,
    effects: true
});


gsap.from('.projetos-card', {
    opacity: 0,
    y: 150,
    stagger: .3,
    scrollTrigger: {
        scrub: true,
        trigger: '.projetos-card',
        start: 'top 80%',
        end: 'top 50%'
    }
})


document.querySelectorAll('.projetos-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -15,
            duration: 0.3,
            boxShadow: '0 10px 20px rgba(79, 70, 229, 0.2)'

        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            boxShadow: "0 0px 0px rgba(0, 0, 0, 0)",
            duration: 0.3,

        });
    });
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