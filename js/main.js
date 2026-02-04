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


// Carrinho
const carrinho = document.getElementById('carrinho');
const fecharCarrinho = document.getElementById('fecharCarrinho');
const abrirCarrinho = document.getElementById('botaoCarrinho')


if (carrinho && abrirCarrinho && fecharCarrinho) {
    abrirCarrinho.addEventListener('click', () => {
        carrinho.classList.add("ativo");
    });

    fecharCarrinho.addEventListener('click', () => {
        carrinho.classList.remove("ativo");
    });
}