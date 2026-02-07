function carregarProduto() {
    const params = new URLSearchParams(window.location.search);

    const tipo = params.get('tipo'); // "jogo" ou "hardware"
    const id = Number(params.get('id'));

    const container = document.getElementById('produtoContainer');

    if (!tipo || isNaN(id)) {
        container.innerHTML = '<p>Produto inválido.</p>';
        return;
    }

    let produto = null;

    // Decide de onde buscar
    if (tipo === 'hardware') {
        produto = Hardware.find(item => item.id === id);
    }

    if (tipo === 'jogo') {
        produto = Jogos.find(item => item.id === id);
    }

    if (!produto) {
        container.innerHTML = '<p>Produto não encontrado.</p>';
        return;
    }

    container.innerHTML = `
        <section class="informacoesProduto">
            <img src="${produto.foto}" alt="${produto.altFoto}" class="imagem_pagina">

            <div class="info">
                <h1>${produto.nome}</h1>
                <p>${produto.descricao}</p>
                <p class="preco">
                    <strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}
                </p>

                ${tipo === 'hardware'
            ? `<p><strong>Tipo:</strong> ${produto.tipos.join(', ')}</p>
                           <p><strong>Plataforma:</strong> ${produto.plataformas.join(', ')}</p>`
            : `<p><strong>Categorias:</strong> ${produto.categorias.join(', ')}</p>
                           <p><strong>Plataformas:</strong> ${produto.Plataformas.join(', ')}</p>`
        }

                <button id="btnCarrinho">Adicionar ao Carrinho</button>
            </div>
        </section>
    `;
    const comprar = document.getElementById('btnCarrinho');

    comprar.addEventListener('click', () => {

        const existingItem = itensNoCarrinho.find(item => item.id === produto.id && item.tipo === produto.tipo && item.nome === produto.nome);

        if (existingItem) {
            existingItem.quantidade += 1;
            chamarToasts(`Quantidade de ${produto.nome} aumentada!`);
        } else {
            itensNoCarrinho.push({ ...produto, quantidade: 1 });
            chamarToasts(`${produto.nome} adicionado ao carrinho!`);
        }

        localStorage.setItem('itensCarrinho', JSON.stringify(itensNoCarrinho))

        atualizarCarrinho();
    });
}

carregarProduto();