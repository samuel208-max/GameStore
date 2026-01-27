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


// CATALOGO DE JOGOS ===============================
let listaDeJogos = document.getElementById('listaDeJogos');

let Jogos = [
    {
        foto: "../assets/images/capaDoJogoCyberpunk.png",
        altFoto: "Capa do jogo Cyberpunk",
        nome: "Cyberpunk 2077",
        preco: 149.00,
        categorias: ["RPG", "Acao"],
        Plataformas: ["PC", "PlayStation", "Xbox"]
    },
    {
        foto: "../assets/images/capaDoJogoTheLastOfUs2.png",
        altFoto: "Capa do jogo The Last Of Us 2",
        nome: "The Last Of Us 2",
        preco: 150.00,
        categorias: ["Aventura", "Acao"],
        Plataformas: ["PC", "PlayStation"]
    },
    {
        foto: "../assets/images/capaDoJogoGodOfWarRagnarok.jpg",
        altFoto: "Capa do jogo God Of War Ragnarok",
        nome: "God Of War Ragnarok",
        preco: 200.00,
        categorias: ["Aventura", "Acao", "RPG"],
        Plataformas: ["PC", "PlayStation"]
    },
    {
        foto: "../assets/images/capaDoJogoTheWitcher3.png",
        altFoto: "Capa do jogo The Witcher 3",
        nome: "The Witcher 3",
        preco: 120.00,
        categorias: ["RPG", "Aventura"],
        Plataformas: ["PC", "PlayStation", "Xbox"]
    },
    {
        foto: "../assets/images/capaDoJogoHorizonForbiddenWest.jpg",
        altFoto: "Capa do jogo Horizon Forbidden West",
        nome: "Horizon Forbidden West",
        preco: 180.00,
        categorias: ["Acao", "Aventura"],
        Plataformas: ["PlayStation"]
    },
    {
        foto: "../assets/images/capaDoJogoEldenRing.jpg",
        altFoto: "Capa do jogo Elden Ring",
        nome: "Elden Ring",
        preco: 220.00,
        categorias: ["RPG", "Acao"],
        Plataformas: ["PC", "PlayStation", "Xbox"]
    },
    {
        foto: "../assets/images/capaDoJogoForzaHorizon5.avif",
        altFoto: "Capa do jogo Forza Horizon 5",
        nome: "Forza Horizon 5",
        preco: 180.00,
        categorias: ["Corrida", "Simulacao"],
        Plataformas: ["PC", "Xbox"]
    },
    {
        foto: "../assets/images/capaDoJogoResidentEvilVillage.png",
        altFoto: "Capa do jogo Resident Evil Village",
        nome: "Resident Evil Village",
        preco: 160.00,
        categorias: ["Terror", "Acao"],
        Plataformas: ["PC", "PlayStation", "Xbox"]
    },
    {
        foto: "../assets/images/capaDoJogoGhostOfTsushima.png",
        altFoto: "Capa do jogo Ghost of Tsushima",
        nome: "Ghost of Tsushima",
        preco: 140.00,
        categorias: ["Acao", "Aventura"],
        Plataformas: ["PlayStation"]
    },
    {
        foto: "../assets/images/capaDoJogoFifa26.avif",
        altFoto: "Capa do jogo FIFA 26",
        nome: "FIFA 26",
        preco: 250.00,
        categorias: ["Esporte"],
        Plataformas: ["PC", "PlayStation", "Xbox"]
    },
    {
        foto: "../assets/images/capaDoJogoKingdomComeDeliverance2.jpg",
        altFoto: "Capa do jogo Kingdom Come Deliverance II",
        nome: "Kingdom Come Deliverance II",
        preco: 210.00,
        categorias: ["RPG", "Acao"],
        Plataformas: ["PC", "PlayStation", "Xbox"]
    },
    {
        foto: "../assets/images/capaDoJogoClairObscurExpedition33.png",
        altFoto: "Capa do jogo Clair Obscur Expedition 33",
        nome: "Clair Obscur Expedition 33",
        preco: 160.00,
        categorias: ["Aventura", "Acao"],
        Plataformas: ["PC", "PlayStation", "Xbox"]
    },
    {
        foto: "../assets/images/capaDoJogoCallOfDutyMW3.webp",
        altFoto: "Capa do jogo Call of Duty Modern Warfare 3",
        nome: "Call of Duty: Modern Warfare 3",
        preco: 230.00,
        categorias: ["FPS", "Acao"],
        Plataformas: ["PC", "PlayStation", "Xbox"]
    },
    {
        foto: "../assets/images/capaDoJogoCounterStrike2.jpg",
        altFoto: "Capa do jogo Counter-Strike 2",
        nome: "Counter-Strike 2",
        preco: 0.00,
        categorias: ["FPS", "Competitivo"],
        Plataformas: ["PC"]
    },
    {
        foto: "../assets/images/capaDoJogoBattlefield2042.jpg",
        altFoto: "Capa do jogo Battlefield 2042",
        nome: "Battlefield 2042",
        preco: 180.00,
        categorias: ["FPS", "Acao"],
        Plataformas: ["PC", "PlayStation", "Xbox"]
    },
    {
        foto: "../assets/images/capaDoJogoValorant.jpg",
        altFoto: "Capa do jogo Valorant",
        nome: "Valorant",
        preco:  0.00,
        categorias: ["FPS", "Tatico"],
        Plataformas: ["PC"]
    },
    {
        foto: "../assets/images/capaDoJogoDoomEternal.png",
        altFoto: "Capa do jogo DOOM Eternal",
        nome: "DOOM Eternal",
        preco: 120.00,
        categorias: ["FPS", "Acao"],
        Plataformas: ["PC", "PlayStation", "Xbox"]
    }

];

// MOSTRAR JOGOS ===================================
Jogos.forEach((jogo) => {
    const li = document.createElement('li');

    const article = document.createElement('article');
    article.className = "cardJogo";

    const div = document.createElement('div');

    const foto = document.createElement('img');
    foto.src = jogo.foto;
    foto.alt = jogo.altFoto;
    div.append(foto);

    const nome = document.createElement('h4');
    nome.textContent = jogo.nome

    const preco = document.createElement('p');
    preco.textContent = "R$" + jogo.preco.toFixed(2);

    const comprar = document.createElement('button');
    comprar.type = "button";
    comprar.textContent = "Adicionar ao Carrinho";

    article.append(div, nome, preco, comprar);
    li.append(article);
    listaDeJogos.append(li);
});

// FILTROS ========================
const checkboxes = document.querySelectorAll('.checkboxFiltro input');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', aplicarFiltros);
});

function aplicarFiltros() {
    const acaoChecked = document.getElementById('filtroAcao').checked;
    const RPGChecked = document.getElementById('filtroRPG').checked;
    const FPSChecked = document.getElementById('filtroFPS').checked;
    const aventuraChecked = document.getElementById('filtroAventura').checked;

    const PCChecked = document.getElementById('filtroPC').checked;
    const playStationChecked = document.getElementById('filtroPlayStation').checked;
    const xboxChecked = document.getElementById('filtroXbox').checked;

    const categoriasSelecionadas = [];
    if (acaoChecked) categoriasSelecionadas.push('Acao');
    if (RPGChecked) categoriasSelecionadas.push('RPG');
    if (FPSChecked) categoriasSelecionadas.push('FPS');
    if (aventuraChecked) categoriasSelecionadas.push('Aventura');

    const plataformasSelecionadas = [];
    if (PCChecked) plataformasSelecionadas.push('PC');
    if (playStationChecked) plataformasSelecionadas.push('PlayStation');
    if (xboxChecked) plataformasSelecionadas.push('Xbox');

    let filtrados = Jogos.filter(jogo => {
        const passaCategoria =
            categoriasSelecionadas.length === 0 ||
            jogo.categorias.some(cat => categoriasSelecionadas.includes(cat));

        const passaPlataforma =
            plataformasSelecionadas.length === 0 ||
            jogo.Plataformas.some(plat => plataformasSelecionadas.includes(plat));

        return passaCategoria && passaPlataforma;
    });

    atualizarLista(filtrados);
}

function atualizarLista(jogosFiltrados) {
    listaDeJogos.innerHTML = ''; // limpa a lista

    jogosFiltrados.forEach(jogo => {
        const li = document.createElement('li');
        const article = document.createElement('article');
        article.className = "cardJogo";

        const div = document.createElement('div');
        const foto = document.createElement('img');
        foto.src = jogo.foto;
        foto.alt = jogo.altFoto;
        div.append(foto);

        const nome = document.createElement('h4');
        nome.textContent = jogo.nome;

        const preco = document.createElement('p');
        preco.textContent = "R$" + jogo.preco.toFixed(2);

        const comprar = document.createElement('button');
        comprar.type = "button";
        comprar.textContent = "Adicionar ao Carrinho";

        article.append(div, nome, preco, comprar);
        li.append(article);
        listaDeJogos.append(li);
    });
}

// HARDWARE ===================================================