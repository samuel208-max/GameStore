const slides = document.querySelectorAll('.bannerSlide');
let slideAtual = 0;

function trocarSlide() {
    slides[slideAtual].classList.remove('ativo');

    slideAtual++;
    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }

    slides[slideAtual].classList.add('ativo');
}

// troca automática a cada 5 segundos
setInterval(trocarSlide, 3000);