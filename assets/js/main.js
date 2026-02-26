// Botao Checkout
const botaoLogin = document.getElementById('botaoLogin');
botaoLogin.addEventListener('click', () => {
    window.location.href = 'auth.php';
});

const btnSair = document.getElementById('btnSair');

function verificarSeEstaLogado() {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    const botaoLogin = document.getElementById('botaoLogin');
    const liNomeUsuario = document.getElementById('liNomeUsuario');

    if (usuarioLogado) {
        liNomeUsuario.style.display = 'flex'
        botaoLogin.style.display = 'none';
        btnSair.style.display = 'flex';
        document.getElementById('nomeUsuario').textContent = usuarioLogado.nome;
    } // else {
    //     liNomeUsuario.style.display = 'none';
    //     liL.style.display = 'flex';
    //     btnSair.style.display = 'none';
    // }
}

if (btnSair) {
    btnSair.addEventListener('click', () => {
        localStorage.removeItem('usuarioLogado');
        window.location.reload();
    });
}

verificarSeEstaLogado();