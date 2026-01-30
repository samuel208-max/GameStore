function carregarProduto() {
    const params = new URLSearchParams(window.location.search);
    const produtoId = params.get('id');
    const id = Number(produtoId);

    const produto = Hardware.find(item => item.id === id);

    const container = document.getElementById('produtoContainer');

    if (!produto) {
        container.innerHTML = '<p>Produto não encontrado.</p>';
        return;
    }

    container.innerHTML = `
        <section class="informacoesProduto">
            <img src="${produto.foto}" alt="${produto.altFoto}">
            <div class="info">
                <h1>${produto.nome}</h1>
                <p>${produto.descricao}</p>
                <p class="preco"><strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}</p>
                <p><strong>Tipo:</strong> ${produto.tipos.join(', ')}</p>
                <p><strong>Plataforma:</strong> ${produto.plataformas.join(', ')}</p>
                <button id="btnCarrinho">Adicionar ao Carrinho</button>
            </div>
        </section>
    `;
}

carregarProduto();
