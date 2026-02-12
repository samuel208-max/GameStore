<?php

require_once '../config/config.php';

?>

<header>
    <span>
        <a href="<?= BASE_URL ?>/public/index.php" style="text-decoration: none; color: inherit;">
            Game<b>Store</b>
        </a>
    </span>

    <nav class="navegacao">
        <ul class="listaNavegacao">
            <li><a href="<?= BASE_URL ?>/public/index.php">Home</a></li>
            <li><a href="<?= BASE_URL ?>/public/catalogo.php">Catálogo</a></li>
            <li><a href="<?= BASE_URL ?>/public/hardware.php">Hardware</a></li>
            <li><a href="#">Comunidade</a></li>
        </ul>
    </nav>

    <div class="divBarraDePesquisa">
        <input type="text" placeholder="Buscar jogos..." class="inputBarraDePesquisa">
        <button type="button" aria-label="Buscar">
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
    </div>

    <ul class="iconesHeader">
        <li>
            <button type="button">
                <i class="fa-solid fa-user" id="botaoLogin"></i> Login
            </button>
        </li>

        <li class="carrinhoHeader" id="carrinhoHeader">
            <button type="button" id="botaoCarrinho">
                <i class="fa-solid fa-cart-shopping"></i> Carrinho
            </button>
        </li>
    </ul>
</header>