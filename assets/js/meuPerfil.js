const btnAbrirMeuPerfil = document.getElementById('nomeUsuario');
const btnFecharMeuPerfil = document.getElementById('fecharMeuPerfil');
const containerMeuPerfil = document.getElementById('meuPerfil');

const usuarioLogadoPerfil = JSON.parse(localStorage.getItem('usuarioLogado'));
const pedidosPerfil = JSON.parse(localStorage.getItem('pedidos')) || [];

const nomeDoUsuario = document.getElementById('nomeDoUsuario');
const emailDoUsuario = document.getElementById('emailDoUsuario');
const dataCadastroDoUsuario = document.getElementById('dataCadastroDoUsuario');
const quantidadeComprasFeitas = document.getElementById('quantidadeComprasFeitas');
const buttonSairPerfil = document.getElementById('buttonSairPerfil');

// Verificação
if (!usuarioLogadoPerfil) {
    // window.location.href = 'index.php';
} else {
    const pedidosUsuario = pedidosPerfil.filter(p => p.idUsuario === usuarioLogadoPerfil.id);

    nomeDoUsuario.textContent = usuarioLogadoPerfil.nome;
    emailDoUsuario.textContent = usuarioLogadoPerfil.email;
    dataCadastroDoUsuario.textContent = usuarioLogadoPerfil.data;
    quantidadeComprasFeitas.textContent = pedidosUsuario.length;

    if (buttonSairPerfil) {
        buttonSairPerfil.addEventListener('click', () => {
            localStorage.removeItem('usuarioLogado');
            window.location.href = 'index.php';
        });
    }
}



if (btnAbrirMeuPerfil && containerMeuPerfil) {
    btnAbrirMeuPerfil.addEventListener('click', () => {
        containerMeuPerfil.classList.add('ativo');
    });
}

if (btnFecharMeuPerfil) {
    btnFecharMeuPerfil.addEventListener('click', () => {
        containerMeuPerfil.classList.remove('ativo');
    });
}