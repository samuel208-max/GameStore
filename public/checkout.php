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

<body>
    <?php include INCLUDES_PATH . '/header.php'; ?>

    <main>
        <div class="informacoesCheckout" id="informacoesCheckout"></div>
        <div class="resumoFinalCarrinho">
            <p>Total: R$ <span id="totalCheckout">00,00</span></p>
            <a href="<?= BASE_URL ?>/public/checkout.php"><button class="btnFinalizarCompra" type="button" id="btnFinalizarCompra">Pagar</button></a>
        </div>
    </main>

    <script src="<?= JS_URL ?>/carrinho.js" defer></script>
    <script src="<?= JS_URL ?>/checkout.js" defer></script>

    <?php include INCLUDES_PATH . '/footer.php'; ?>
</body>

</html>