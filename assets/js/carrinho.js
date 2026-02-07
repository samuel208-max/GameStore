// Carrinho
const carrinho = document.getElementById('carrinho');
const listaCarrinho = document.getElementById('listaCarrinho');
const fecharCarrinho = document.getElementById('fecharCarrinho');
const abrirCarrinho = document.getElementById('botaoCarrinho')
const totalCarrinho = document.getElementById('totalCarrinho');

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
let itensNoCarrinho = JSON.parse(localStorage.getItem('itensCarrinho')) || [];

// localStorage.clear();

function atualizarCarrinho() {
    listaCarrinho.innerHTML = '';

    if (itensNoCarrinho.length === 0) {
        const vazio = document.createElement('p');
        vazio.className = 'carrinhoVazio'
        vazio.textContent = 'Carrinho vazio';
        listaCarrinho.appendChild(vazio);
        return;
    }

    itensNoCarrinho.forEach((produto) => {

        const liCarrinho = document.createElement('li');
        liCarrinho.className = 'itemCarrinho';

        const img = document.createElement('img');
        img.className = 'imagem_carrinho';
        img.src = produto.foto;
        img.alt = produto.altfoto;

        const div = document.createElement('div');
        div.className = 'info_carrinho';

        const nome = document.createElement('h4');
        nome.className = 'nome_carrinho';
        nome.textContent = produto.nome;

        const preco = document.createElement('p');
        preco.className = 'preco_carrinho';
        preco.textContent = `R$ ${(produto.preco * produto.quantidade).toFixed(2)}`;

        const divQuantidade = document.createElement('div');
        divQuantidade.className = 'quantidade_carrinho';

        const diminuirQuantidade = document.createElement('button');
        diminuirQuantidade.className = 'diminuirQuantidade';
        diminuirQuantidade.textContent = '-';

        diminuirQuantidade.addEventListener('click', () => {
            if (produto.quantidade > 1) {
                produto.quantidade -= 1;
                chamarToasts(`Quantidade de ${produto.nome} diminuída!`);
            } else {
                itensNoCarrinho = itensNoCarrinho.filter(item => item.id !== produto.id || item.tipo !== produto.tipo || item.nome !== produto.nome);
                chamarToasts(`${produto.nome} removido do carrinho!`);
                localStorage.setItem('itensCarrinho', JSON.stringify(itensNoCarrinho));
            }
            localStorage.setItem('itensCarrinho', JSON.stringify(itensNoCarrinho));
            atualizarCarrinho();
        });

        const quantidade = document.createElement('span');
        quantidade.className = 'quantidadeItemCarrinho';
        quantidade.textContent = produto.quantidade;

        const aumentarQuantidade = document.createElement('button');
        aumentarQuantidade.className = 'aumentarQuantidade';
        aumentarQuantidade.textContent = '+';

        aumentarQuantidade.addEventListener('click', () => {
            produto.quantidade += 1;
            chamarToasts(`Quantidade de ${produto.nome} aumentada!`);
            atualizarCarrinho();
            localStorage.setItem('itensCarrinho', JSON.stringify(itensNoCarrinho));
        });

        divQuantidade.append(diminuirQuantidade, quantidade, aumentarQuantidade);
        div.append(nome, preco);
        liCarrinho.append(img, div, divQuantidade);
        listaCarrinho.appendChild(liCarrinho);
    });

    const total = itensNoCarrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
    totalCarrinho.textContent = total.toFixed(2);
}

atualizarCarrinho();


function chamarToasts(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';

    const textoToast = document.createElement('span');
    textoToast.className = 'textoToast';
    textoToast.textContent = message;

    toast.appendChild(textoToast);
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}