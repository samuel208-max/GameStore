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


// Carrinho
const carrinho = document.getElementById('carrinho');
const listaCarrinho = document.getElementById('produtosCarrinho');
const fecharCarrinho = document.getElementById('fecharCarrinho');
const abrirCarrinho = document.getElementById('botaoCarrinho')

// Abrir e fechar carrinho
if (carrinho && abrirCarrinho && fecharCarrinho) {
    abrirCarrinho.addEventListener('click', () => {
        carrinho.classList.add("ativo");
    });

    fecharCarrinho.addEventListener('click', () => {
        carrinho.classList.remove("ativo");
    });
}


// Lógica de renderizar carrinho
const itensNoCarrinho = JSON.parse(localStorage.getItem('itensCarrinho')) || [];
console.log(itensNoCarrinho);

// localStorage.clear();

function atualizarCarrinho() {
    listaCarrinho.innerHTML = '';

    itensNoCarrinho.forEach((produto) => {

        const liCarrinho = document.createElement('li');

        const img = document.createElement('img');
        img.src = produto.foto;
        img.style.width = "30px";
        img.style.height = "30px";
        img.alt = produto.altfoto;

        const div = document.createElement('div');

        const nome = document.createElement('h4');
        nome.textContent = produto.nome;

        div.appendChild(nome);
        liCarrinho.append(img, div);
        listaCarrinho.appendChild(liCarrinho);
    });
}

atualizarCarrinho();