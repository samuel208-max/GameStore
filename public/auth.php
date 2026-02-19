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

            <!-- AREA DOS FORMS -->
            <div class="areaForm">

                <!-- LOGIN -->
                <div class="divAuth" id="formLogin">
                    <h1>Login</h1>
                    <form class="formAuth">
                        <input type="email" placeholder="E-mail" required class="inputAuth">
                        <input type="password" placeholder="Senha" required class="inputAuth">
                        <a href="">Esqueceu sua senha?</a>
                        <button type="submit">Login</button>
                    </form>
                </div>

                <!-- CADASTRO -->
                <div class="divAuth" id="formCadastro">
                    <h1>Cadastrar</h1>
                    <form class="formAuth">
                        <input type="text" placeholder="Nome Completo" required class="inputAuth">
                        <input type="email" placeholder="E-mail" required class="inputAuth">
                        <input type="password" placeholder="Senha" required class="inputAuth">
                        <input type="password" placeholder="Confirmar Senha" required class="inputAuth">
                        <div class="divTermos">
                            <input type="checkbox" name="termos" id="termos" required>
                            <label for="termos">Eu concordo com os <a href="">Termos de Uso</a> e a <a href="">Política de Privacidade</a></label>
                        </div>
                        <button type="submit">Cadastrar</button>
                    </form>
                </div>

            </div>

            <!-- PAINEL LATERAL -->
            <div class="containerSobreposicao">
                <div class="painel" id="painelDireita">
                    <h2>Ainda não tem uma conta?</h2>
                    <p>Crie sua conta e aproveite a melhor loja gamer</p>
                    <button id="cadastrar">Cadastrar</button>
                </div>

                <div class="painel" id="painelEsquerda" style="display: none;">
                    <h2>Já possui conta?</h2>
                    <p>Faça login e continue sua jornada</p>
                    <button id="entrar">Entrar</button>
                </div>
            </div>

        </div>
    </main>


    <?php include INCLUDES_PATH . "/footer.php"; ?>

    <script src="<?= JS_URL ?>/auth.js"></script>
</body>

</html>