<?php

$paginaCheckout = true;
require_once '../config/config.php';


?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= CSS_URL ?>/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">

    <title>Checkout</title>
</head>

<body class="bodyCheckout">
    <?php include INCLUDES_PATH . '/header.php'; ?>

    <main class="mainCheckout">
        <div class="containerCheckout">
            <h1 class="tituloCheckout">Checkout</h1>
            <h2>Resumo do pedido</h2>
            <ul class="informacoesCheckout" id="informacoesCheckout"></ul>

            <div class="resumoFinalCheckout">
                <p>Total: R$ <span id="totalCheckout">00,00</span></p>
                <button type="button" class="btnPagar" id="btnPagar">Pagar</button>
            </div>
        </div>
    </main>

    <script src="<?= JS_URL ?>/carrinho.js" defer></script>
    <script src="<?= JS_URL ?>/checkout.js" defer></script>

    <?php include INCLUDES_PATH . '/footer.php'; ?>
</body>

</html>