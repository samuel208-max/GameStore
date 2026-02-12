<?php require_once '../config/config.php'; ?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= CSS_URL ?>/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">

    <title>GameStore - Hardware</title>
</head>

<body>
    <?php include INCLUDES_PATH . '/header.php'; ?>

    <main>

        <?php include INCLUDES_PATH . '/carrinho.php'; ?>

        <section id="banner">
            <div class="bannerSlides">
                <div class="bannerSlide ativo"
                    style="background-image: url('<?= IMAGES_URL ?>/bannerHardware.jpg');">
                </div>
            </div>

            <div id="bannerCentral">
                <div id="bannerTexto">
                    <h1>Produtos de última geração</h1>
                    <p>Explore nossa coleção completa de PCs, consoles, acessórios e periféricos</p>
                </div>
            </div>
        </section>

        <section class="section1" id="conhecaNossosProdutos">
            <div class="topoDaSection">
                <h2>Conheça nossos Produtos</h2>
                <h3>Conheça nossa coleção completa</h3>
            </div>

            <div class="conteudoCatalogo">
                <aside class="filtros">
                    <h2>Filtros</h2>

                    <div class="campoFiltro">
                        <h3>Tipo</h3>

                        <div class="checkboxFiltro">
                            <input type="checkbox" name="filtroConsole" id="filtroConsole">
                            <label for="filtroConsole">Console</label>
                        </div>

                        <div class="checkboxFiltro">
                            <input type="checkbox" name="filtroPcCompleto" id="filtroPcCompleto">
                            <label for="filtroPcCompleto">PC Completo</label>
                        </div>

                        <div class="checkboxFiltro">
                            <input type="checkbox" name="filtroControles" id="filtroControles">
                            <label for="filtroControles">Controles</label>
                        </div>

                        <div class="checkboxFiltro">
                            <input type="checkbox" name="filtroPerifericos" id="filtroPerifericos">
                            <label for="filtroPerifericos">Periféricos</label>
                        </div>

                        <div class="checkboxFiltro">
                            <input type="checkbox" name="filtroComponentes" id="filtroComponentes">
                            <label for="filtroComponentes">Componentes</label>
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

                <!-- LISTA DE HARDWARE (JS) -->
                <ul class="listaDeProdutos" id="listaDeHardware"></ul>
            </div>
        </section>
    </main>

    <?php include INCLUDES_PATH . '/footer.php'; ?>

    <script src="<?= JS_URL ?>/produtos.js" defer></script>
    <script src="<?= JS_URL ?>/hardware.js" defer></script>
    <script src="<?= JS_URL ?>/carrinho.js" defer></script>
</body>

</html>