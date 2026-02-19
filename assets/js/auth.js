const botaoCadastrar = document.getElementById('cadastrar');
const botaoEntrar = document.getElementById('entrar');
const container = document.querySelector('.containerAuth');

botaoCadastrar.addEventListener('click', () => {
    container.classList.add('modoCadastro');
});

botaoEntrar.addEventListener('click', () => {
    container.classList.remove('modoCadastro');
});

console.log('Script de autenticação carregado com sucesso!');