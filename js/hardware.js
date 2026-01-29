const listaDeHardware = document.getElementById('listaDeHardware');

if (listaDeHardware) {
    Hardware.forEach((produto) => {
        const liHardware = document.createElement('li');

        const articleHardware = document.createElement('article');
        articleHardware.className = "cardJogo";

        const divHardware = document.createElement('div');

        const fotoHardware = document.createElement('img');
        fotoHardware.src = produto.foto;
        fotoHardware.alt = produto.altFoto;
        divHardware.append(fotoHardware);

        const nomeHardware = document.createElement('h4');
        nomeHardware.textContent = produto.nome

        const precoHardware = document.createElement('p');
        precoHardware.textContent = "R$" + produto.preco.toFixed(2);

        const comprarHardware = document.createElement('button');
        comprarHardware.type = "button";
        comprarHardware.textContent = "Adicionar ao Carrinho";

        articleHardware.append(divHardware, nomeHardware, precoHardware, comprarHardware);
        liHardware.append(articleHardware);
        listaDeHardware.append(liHardware);
    });

    const checkboxesHardware = document.querySelectorAll('.checkboxFiltro input');

    checkboxesHardware.forEach(checkbox => {
        checkbox.addEventListener('change', AplicarFiltrosHardware);
    });


    function AplicarFiltrosHardware() {
        const consoleChecked = document.getElementById('filtroConsole').checked;
        const pcCompletoChecked = document.getElementById('filtroPcCompleto').checked;
        const controlesChecked = document.getElementById('filtroControles').checked;
        const perifericosChecked = document.getElementById('filtroPerifericos').checked;
        const componentesChecked = document.getElementById('filtroComponentes').checked;

        const PCChecked = document.getElementById('filtroPC').checked;
        const playStationChecked = document.getElementById('filtroPlayStation').checked;
        const xboxChecked = document.getElementById('filtroXbox').checked;


        const tiposSelecionados = [];
        if (consoleChecked) tiposSelecionados.push('Console');
        if (pcCompletoChecked) tiposSelecionados.push('PC Completo');
        if (controlesChecked) tiposSelecionados.push('Controles');
        if (perifericosChecked) tiposSelecionados.push('Perifericos');
        if (componentesChecked) tiposSelecionados.push('Componentes');

        const plataformasSelecionadas = [];
        if (PCChecked) plataformasSelecionadas.push('PC');
        if (playStationChecked) plataformasSelecionadas.push('PlayStation');
        if (xboxChecked) plataformasSelecionadas.push('Xbox');

        let filtrados = Hardware.filter(produto => {
            const passaTipos =
                tiposSelecionados.length === 0 ||
                produto.tipos.some(prod => tiposSelecionados.includes(prod));

            const passaPlataforma =
                plataformasSelecionadas.length === 0 ||
                produto.plataformas.some(plat => plataformasSelecionadas.includes(plat));

            return passaTipos && passaPlataforma;
        });

        atualizarLista(filtrados);
    }

    function atualizarLista(produtosFiltrados) {
        listaDeHardware.innerHTML = ''; // limpa a lista

        produtosFiltrados.forEach(produto => {
            const liHardware = document.createElement('li');

            const articleHardware = document.createElement('article');
            articleHardware.className = "cardJogo";

            const divHardware = document.createElement('div');

            const fotoHardware = document.createElement('img');
            fotoHardware.src = produto.foto;
            fotoHardware.alt = produto.altFoto;
            divHardware.append(fotoHardware);

            const nomeHardware = document.createElement('h4');
            nomeHardware.textContent = produto.nome

            const precoHardware = document.createElement('p');
            precoHardware.textContent = "R$" + produto.preco.toFixed(2);

            const comprarHardware = document.createElement('button');
            comprarHardware.type = "button";
            comprarHardware.textContent = "Adicionar ao Carrinho";

            articleHardware.append(divHardware, nomeHardware, precoHardware, comprarHardware);
            liHardware.append(articleHardware);
            listaDeHardware.append(liHardware);
        });
    }
}