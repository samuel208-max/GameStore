<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">

    <title>GameStore</title>
</head>

<body>
    <header>
        <span>Game<b>Store</b></span>
        <nav class="navegacao">
            <ul class="listaNavegacao">
                <li><a href="../public/index.php">Home</a></li>
                <li><a href="../public/catalogo.php">Catálogo</a></li>
                <li><a href="../public/hardware.php">Hardware</a></li>
                <li><a href="">Ofertas</a></li>
            </ul>
        </nav>

        <div class="divBarraDePesquisa">
            <input type="text" placeholder="Buscar jogos..." class="inputBarraDePesquisa">
            <button type="button" aria-label="Buscar"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>

        <ul class="iconesHeader">
            <li><button type="button"><i class="fa-solid fa-user" id="botaoLogin"></i> Login</button></li>
            <li><button type="button" id="botaoCarrinho"><i class="fa-solid fa-cart-shopping"></i> Carrinho</button></li>
        </ul>
    </header>