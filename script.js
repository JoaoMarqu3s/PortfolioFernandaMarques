document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('.header');

    // Função para adicionar a classe 'active' ao link de navegação
    const updateActiveLink = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - header.offsetHeight;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    };

    // Função para as animações ao rolar a página
    const animateOnScroll = () => {
        const elementsToAnimate = document.querySelectorAll('.fade-in, .slide-up');
        elementsToAnimate.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (elementTop < screenHeight - 100) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    };
    
    // Listeners de Eventos
    window.addEventListener('scroll', () => {
        updateActiveLink();
        animateOnScroll();
    });

    // Animar elementos na carga da página
    animateOnScroll();
});