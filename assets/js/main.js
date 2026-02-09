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

if (slides.length > 0) {
    setInterval(trocarSlide, 3000);
}

let tituloAnimado = document.querySelector('#banner h1');
let tituloAnimado2 = tituloAnimado.textContent;
tituloAnimado.textContent = "";

tituloAnimado2.split('').forEach((letra, index) => {
    setTimeout(() => {
        tituloAnimado.textContent += letra;
    }, 100 * index);
});