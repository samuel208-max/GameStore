<?php

include '../includes/header.php';
include '../includes/carrinho.php';

?>

<main>
    <section id="banner">
        <div class="bannerSlides">
            <div class="bannerSlide ativo" style="background-image: url('../assets/images/BannerPrincipal1.avif');">
            </div>
            <div class="bannerSlide" style="background-image: url('../assets/images/BannerPrincipal2.jpg');"></div>
            <div class="bannerSlide" style="background-image: url('../assets/images/BannerPrincipal3.jpg');"></div>
        </div>

        <div id="bannerCentral">
            <div id="bannerTexto">
                <h1>Os melhores jogos estão aqui</h1>
                <p>Descubra uma experiência única de compra com milhares de <br> jogos, ofertas exclusivas e suporte
                    24/7</p>
            </div>

            <div id="bannerLinks">
                <a href="../public/catalogo.php" class="bannerBotaoLink" id="explorarCatalogo">Explorar Catálogo</a>
                <a href="#" class="bannerBotaoLink" id="verOfertas">Ver Ofertas</a>
            </div>

            <div class="bannerEstastisticas">
                <div>
                    <h3>5.000+</h3>
                    <p>Jogos Disponíveis</p>
                </div>

                <div>
                    <h3>100.000+</h3>
                    <p>Clientes Satisfeitos</p>
                </div>

                <div>
                    <h3>24/7</h3>
                    <p>Suporte Online</p>
                </div>
            </div>
        </div>
    </section>

    <section class="section section1">
        <div class="topoDaSection">
            <h2>Jogos em destaque</h2>
            <h3>Os títulos mais populares e bem avaliados da nossa comunidade</h3>
        </div>

        <div class="fileira">
            <article class="cardJogo">
                <div>
                    <img src="../assets/images/capaDoJogoCyberpunk.png" alt="Capa do jogo Cyberpunk">
                </div>
                <h4>Cyberpunk 2077</h4>
                <p>R$ 149,00</p>
                <button type="button">Adicionar ao Carrinho</button>
            </article>

            <article class="cardJogo">
                <div>
                    <img src="../assets/images/capaDoJogoGodOfWarRagnarok.jpg"
                        alt="Capa do jogo God Of War Ragnarok">
                </div>
                <h4>God Of War: Ragnarok</h4>
                <p>R$ 200,00</p>
                <button type="button">Adicionar ao Carrinho</button>
            </article>

            <article class="cardJogo">
                <div>
                    <img src="../assets/images/capaDoJogoTheLastOfUs2.png" alt="Capa do jogo The Last Of Us 2">
                </div>
                <h4>The Last Of Us 2</h4>
                <p>R$ 150,00</p>
                <button type="button">Adicionar ao Carrinho</button>
            </article>

            <article class="cardJogo">
                <div>
                    <img src="../assets/images/capaDoJogoTheWitcher3.png"
                        alt="Capa do jogo The Witcher 3 Wild Hunt">
                </div>
                <h4>The Witcher 3: Wild Hunt</h4>
                <p>R$ 63,92</p>
                <button type="button">Adicionar ao Carrinho</button>
            </article>

            <article class="cardJogo">
                <div>
                    <img src="../assets/images/capaDoJogoEldenRing.jpg" alt="Capa do jogo Elden Ring">
                </div>
                <h4>Elden Ring</h4>
                <p>R$ 249,90</p>
                <button type="button">Adicionar ao Carrinho</button>
            </article>
        </div>
    </section>

    <section class="section section2">
        <div class="topoDaSection">
            <h2>Explore por categoria</h2>
            <h3>Encontre seus jogos favoritos por gênero e estilo</h3>
        </div>

        <div class="fileira">
            <article class="cardCategoria">
                <span aria-hidden="true">🎮</span>
                <h3>Ação</h3>
                <p>1.200 jogos</p>
            </article>

            <article class="cardCategoria">
                <span aria-hidden="true">⚔️</span>
                <h3>RPG</h3>
                <p>850 jogos</p>
            </article>

            <article class="cardCategoria">
                <span aria-hidden="true">🧩</span>
                <h3>Estratégia</h3>
                <p>600 jogos</p>
            </article>

            <article class="cardCategoria">
                <span aria-hidden="true">🏆</span>
                <h3>Esportes</h3>
                <p>350 jogos</p>
            </article>

            <article class="cardCategoria">
                <span aria-hidden="true">🎯</span>
                <h3>FPS</h3>
                <p>700 jogos</p>
            </article>

            <article class="cardCategoria">
                <span aria-hidden="true">🏎️</span>
                <h3>Corrida</h3>
                <p>250 jogos</p>
            </article>

            <article class="cardCategoria">
                <span aria-hidden="true">👻</span>
                <h3>Terror</h3>
                <p>180 jogos</p>
            </article>

            <article class="cardCategoria">
                <span aria-hidden="true">🧠</span>
                <h3>Puzzle</h3>
                <p>420 jogos</p>
            </article>

            <article class="cardCategoria">
                <span aria-hidden="true">🌍</span>
                <h3>Aventura</h3>
                <p>540 jogos</p>
            </article>

            <article class="cardCategoria">
                <span aria-hidden="true">🛠️</span>
                <h3>Simulação</h3>
                <p>310 jogos</p>
            </article>
        </div>
    </section>

    <section class="section section1">
        <div class="topoDaSection">
            <h2>Ofertas Especiais</h2>
            <h3>Promoções imperdíveis por tempo ilimitado</h3>
        </div>

        <div class="fileiraOfertasEspeciais">
            <article class="cardOfertasEspeciais">
                <img src="../assets/images/imagemOfertaEspecialEsporte.jpg" alt="Oferta Especial Esportes">
                <div class="textoOfertaEspecial">
                    <h3>Mês Esportes</h3>
                    <p>Descontos de até 75% em jogos esportivos!</p>
                </div>
            </article>

            <article class="cardOfertasEspeciais">
                <img src="../assets/images/imagemOfertaEspecialRPG.jpg" alt="Oferta Especial RPG">
                <div class="textoOfertaEspecial">
                    <h3>Mês RPG</h3>
                    <p>Descontos de até 60% em jogos RPG!</p>
                </div>
            </article>
        </div>
    </section>

    <section class="section" id="sectionInscricaoNewsletter">
        <div id="textoInscricaoNewsletter">
            <h2>Fique por dentro das novidades</h2>
            <p>Inscreva-se para receber nossas promoções exclusivas e novidades sobre lançamentos!</p>
        </div>

        <form class="divInscricaoNewsletter" action="" method="POST">
            <input type="email" placeholder="Digite seu e-mail" class="inputInscricaoNewsletter" name="email"
                required>
            <button type="submit" class="botaoInscricaoNewsletter">Inscrever-se</button>
        </form>
    </section>
</main>

<?php include '../includes/footer.php'; ?>