<aside class="meuPerfil" id="meuPerfil">
    <div class="topoMeuPerfil">
        <h2>Meu Perfil</h2>
        <button class="fecharMeuPerfil" id="fecharMeuPerfil">❌</button>
    </div>
    <div class="dadosUsuarios">
        <p class="nomeDoUsuario" id="nomeDoUsuario"></p>
        <p class="emailDoUsuario" id="emailDoUsuario"></p>
        <p>Data de Cadastro: <span class="dataCadastroDoUsuario" id="dataCadastroDoUsuario"></span></p>
        <p>Quantidade de compras feitas: <span class="quantidadeComprasFeitas" id="quantidadeComprasFeitas"></span></p>
    </div>

    <ul class="botoesNavegacao">
        <li><a href="" class="buttonNavMeuPerfil" id="buttonAlterarDados">Alterar dados</a></li>
        <li><a href="" class="buttonNavMeuPerfil" id="buttonAlterarSenha">Alterar Senha</a></li>
        <li><a href="<?= BASE_URL ?>/public/minhasCompras.php" class="buttonNavMeuPerfil" id="buttonMinhasCompras">Minhas Compras</a></li>
        <li><a href="" class="buttonNavMeuPerfil" id="buttonConfiguracoes">Configurações</a></li>
    </ul>

    <button id="buttonSairPerfil"><i class="fa-solid fa-left-long"></i> Sair da conta</button>
</aside>