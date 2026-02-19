<?php require_once '../config/config.php'; ?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= CSS_URL ?>/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">

    <title>GameStore - Catálogo</title>
</head>

<body>

    <?php include INCLUDES_PATH . '/header.php'; ?>

    <main>

        <?php include INCLUDES_PATH . '/carrinho.php'; ?>

        <section id="banner">
            <div class="bannerFixo"
                style="background-image: url('https://image.api.playstation.com/vulcan/ap/rnd/202407/0401/670c294ded3baf4fa11068db2ec6758c63f7daeb266a35a1.png');">
            </div>

            <div id="bannerCentral">
                <div id="bannerTexto">
                    <h1>Nosso catálogo de jogos</h1>
                    <p>Explore nossa coleção completa de jogos para todas as plataformas</p>
                </div>
            </div>
        </section>

        <section class="section1" id="conhecaNossosJogos">
            <div class="topoDaSection">
                <h2>Conheça nossos jogos</h2>
                <h3>Conheça nossa coleção completa</h3>
            </div>

            <div class="conteudoCatalogo">
                <aside class="filtros">
                    <h2>Filtros</h2>

                    <div class="campoFiltro">
                        <h3>Categoria</h3>

                        <div class="checkboxFiltro">
                            <input type="checkbox" name="filtroAcao" id="filtroAcao">
                            <label for="filtroAcao">Ação</label>
                        </div>

                        <div class="checkboxFiltro">
                            <input type="checkbox" name="filtroRPG" id="filtroRPG">
                            <label for="filtroRPG">RPG</label>
                        </div>

                        <div class="checkboxFiltro">
                            <input type="checkbox" name="filtroFPS" id="filtroFPS">
                            <label for="filtroFPS">FPS</label>
                        </div>

                        <div class="checkboxFiltro">
                            <input type="checkbox" name="filtroAventura" id="filtroAventura">
                            <label for="filtroAventura">Aventura</label>
                        </div>
                    </div>

                    <div class="campoFiltro">
                        <h3>Plataforma</h3>

                        <div class="checkboxFiltro">
                            <input type="checkbox" name="filtroPC" id="filtroPC">
                            <label for="filtroPC">PC</label>
                        </div>

                        <div class="checkboxFiltro">
                            <input type="checkbox" name="filtroPlayStation" id="filtroPlayStation">
                            <label for="filtroPlayStation">PlayStation</label>
                        </div>

                        <div class="checkboxFiltro">
                            <input type="checkbox" name="filtroXbox" id="filtroXbox">
                            <label for="filtroXbox">Xbox</label>
                        </div>
                    </div>
                </aside>

                <ul class="listaDeProdutos" id="listaDeJogos"></ul>
            </div>
        </section>
    </main>

    <?php include INCLUDES_PATH . '/footer.php'; ?>

    <script src="<?= JS_URL ?>/main.js" defer></script>
    <script src="<?= JS_URL ?>/animacoes.js" defer></script>
    <script src="<?= JS_URL ?>/produtos.js" defer></script>
    <script src="<?= JS_URL ?>/catalogo.js" defer></script>
    <script src="<?= JS_URL ?>/carrinho.js" defer></script>
</body>

</html>