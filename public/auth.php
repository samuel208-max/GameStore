<?php

$paginaAuth = true;
require_once '../config/config.php';

?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= CSS_URL ?>/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">

    <title>Login</title>
</head>

<body class="bodyAuth">
    <?php include INCLUDES_PATH . "/header.php"; ?>

    <main class="mainAuth">
        <div class="containerAuth">
            <div class="divAuth">
                <h1>Login</h1>
                <form action="" class="formAuth">
                    <input type="email" name="emailLogin" class="inputAuth" id="emailLogin" placeholder="E-mail" required>
                    <input type="password" name="senhaLogin" class="inputAuth" id="senhaLogin" placeholder="Senha" required>
                    <a href="">Esqueceu a senha?</a>
                    <button type="submit">Login</button>
                </form>
            </div>

            <div class="divAuth">
                <h1>Cadastrar</h1>
                <form action="" class="formAuth">
                    <input type="text" name="nomeCadastrar" class="inputAuth" id="nomeCadastrar" placeholder="Nome Completo" required>
                    <input type="email" name="emailCadastrar" class="inputAuth" id="emailCadastrar" placeholder="E-mail" required>
                    <input type="password" name="senhaCadastrar" class="inputAuth" id="senhaCadastrar" placeholder="Senha" required>
                    <input type="password" name="confirmarSenha" class="inputAuth" id="confirmarSenha" placeholder="Confirmar Senha" required>
                    <div class="divTermos">
                        <input type="checkbox" name="termos" id="termos">
                        <label for="termos">Aceito os termos</label>
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>

            <!-- <div class="containerSobreposicao"> -->
                <!-- <div class="sobreposicao"> -->
                    <!-- div da esquerda -->
                    <!-- <div class="painelSobreposicao painelEsquerda">
                        <h1>Acesse sua conta</h1>
                        <p>Faça login e gerencie sua pizzaria agora mesmo</p>
                        <button class="ghost" id="entrar">Entrar</button>
                    </div> -->
                    <!-- div da direita -->
                    <!-- <div class="painelSobreposicao painelDireita">
                        <h1>Ainda não tem uma conta?</h1>
                        <p>Crie sua conta e comece a gerenciar sua pizzaria agora mesmo</p>
                        <button class="ghost" id="cadastrar">Cadastrar</button>
                    </div> -->
                <!-- </div> -->
            <!-- </div>  -->
        </div>
    </main>

    <?php include INCLUDES_PATH . "/footer.php"; ?>

    <script src="<?= JS_URL ?>/auth.js"></script>
</body>

</html>