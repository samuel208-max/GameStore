const usuarioLogadoMinhasCompras = JSON.parse(localStorage.getItem('usuarioLogado'));
const pedidosMinhasCompras = JSON.parse(localStorage.getItem('pedidos')) || [];

const listaMinhasCompras = document.getElementById("listaMinhasCompras");
const semCommpras = document.getElementById('semCompras');

if (!usuarioLogadoMinhasCompras) {
    window.location.href = 'index.php';
} else {
    const pedidosDoUsuario = pedidosMinhasCompras.filter(p => p.idUsuario === usuarioLogadoMinhasCompras.id);

    if (pedidosDoUsuario.length === 0) {
        semCommpras.textContent = "Sem compras realizadas";
    } else {
        pedidosDoUsuario.forEach(pedido => {
            const liMinhaCompra = document.createElement('li');
            liMinhaCompra.className = "liMinhaCompra";

            const idPedido = document.createElement('h3');
            idPedido.className = "idPedido";
            idPedido.textContent = `Pedido: #${pedido.id}`;

            const dataPedido = document.createElement('p');
            dataPedido.className = "dataPedido";
            dataPedido.textContent = `Data: ${pedido.data}`;

            const totalPedido = document.createElement('p');
            totalPedido.className = "totalPedido";
            totalPedido.textContent = Number(pedido.total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            const quantidadeItens = document.createElement('p');
            quantidadeItens.className = "quantidadeItens";
            quantidadeItens.textContent = `${pedido.itens.length} Item(s)`;

            const botaoSaibaMais = document.createElement('button');
            botaoSaibaMais.className = "botaoSaibaMais";
            botaoSaibaMais.textContent = "Ver Itens";

            const containerItens = document.createElement('div');
            containerItens.className = "containerItensPedido";

            pedido.itens.forEach(item => {
                const itemPedido = document.createElement('p');
                itemPedido.textContent = `${item.nome} (x${item.quantidade}) - ` + Number(item.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                containerItens.appendChild(itemPedido);
            });

            botaoSaibaMais.addEventListener('click', () => {
                const aberto = containerItens.classList.contains('aberto');

                if (aberto) {
                    containerItens.classList.remove('aberto');
                    containerItens.style.maxHeight = null;
                    botaoSaibaMais.textContent = "Ver Itens";
                } else {
                    containerItens.classList.add('aberto');
                    containerItens.style.maxHeight = containerItens.scrollHeight + "px";
                    botaoSaibaMais.textContent = "Ocultar Itens";
                }
            });

            liMinhaCompra.append(idPedido, dataPedido, totalPedido, quantidadeItens, containerItens, botaoSaibaMais);
            listaMinhasCompras.appendChild(liMinhaCompra);
        });
    }
}