<?php require_once '../config/config.php'; ?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= CSS_URL ?>/style.css">
    <link rel="stylesheet" href="<?= CSS_URL ?>/meuPerfil.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">

    <title>GameStore</title>
</head>

<body>
    <?php include INCLUDES_PATH . '/header.php'; ?>
    <?php include INCLUDES_PATH . '/carrinho.php'; ?>
    <?php include INCLUDES_PATH . '/meuPerfil.php'; ?>

    <main>
        <?php include INCLUDES_PATH . '/carrinho.php'; ?>

        <div id="produtoContainer" class="section2"></div>
    </main>

    <?php include INCLUDES_PATH . '/footer.php'; ?>

    <script src="<?= JS_URL ?>/main.js" defer></script>
    <script src="<?= JS_URL ?>/meuPerfil.js" defer></script>
    <script src="<?= JS_URL ?>/produtos.js" defer></script>
    <script src="<?= JS_URL ?>/produto.js" defer></script>
    <script src="<?= JS_URL ?>/carrinho.js" defer></script>
</body>

</html>