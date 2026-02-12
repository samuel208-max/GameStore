<aside class="carrinho" id="carrinho">
    <div class="topoCarrinho">
        <h2 class="tituloCarrinho">Carrinho</h2>
        <button class="fecharCarrinho" id="fecharCarrinho">❌</button>
    </div>

    <ul class="listaCarrinho" id="listaCarrinho"></ul>

    <div class="resumoFinalCarrinho">
        <p>Total: R$ <span id="totalCarrinho">00,00</span></p>
        <a href="<?= BASE_URL ?>/public/checkout.php"><button class="btnFinalizarCompra" type="button" id="btnFinalizarCompra">Finalizar Compra</button></a>
    </div>
</aside>