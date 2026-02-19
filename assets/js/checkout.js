const informacoesCheckout = document.getElementById('informacoesCheckout');
const totalCheckout = document.getElementById('totalCheckout');
const btnPagar = document.getElementById('btnPagar');

if (itensNoCarrinho.length === 0) {
    window.location.href = 'index.php';
}

function carregarInformacoesCheckout() {
    itensNoCarrinho.forEach((produto) => {
        const liCheckout = document.createElement('li');
        liCheckout.className = 'itemCheckout';

        const img = document.createElement('img');
        img.className = 'imagemCheckout';
        img.src = produto.foto;
        img.alt = produto.altfoto;

        const info = document.createElement('div');
        info.className = 'infoCheckout';

        const nome = document.createElement('h4');
        nome.className = 'nomeCheckout';
        nome.textContent = produto.nome;

        const preco = document.createElement('p');
        preco.className = 'precoCheckout';
        preco.textContent = `Subtotal:  R$ ${(produto.preco * produto.quantidade).toFixed(2)}`;

        info.append(nome, preco);

        const divQuantidade = document.createElement('div');
        divQuantidade.className = 'divQuantidadeCheckout';

        const quantidade = document.createElement('span');
        quantidade.className = 'quantidadeItemCheckout';
        quantidade.textContent = produto.quantidade;

        divQuantidade.appendChild(quantidade);

        liCheckout.append(img, info, divQuantidade);
        informacoesCheckout.appendChild(liCheckout);
    });

}
carregarInformacoesCheckout();

function calcularTotalCheckout() {
    const total = itensNoCarrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
    totalCheckout.textContent = total.toFixed(2);
}
calcularTotalCheckout();

function BotaoPagar() {
    alert('Compra realizada com sucesso!');

    itensNoCarrinho = [];
    localStorage.setItem('itensCarrinho', JSON.stringify(itensNoCarrinho));

    window.location.href = 'index.php';
}

btnPagar.addEventListener('click', () => {
    BotaoPagar();
});