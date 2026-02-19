const container = document.querySelector('.containerAuth');
const painelDireita = document.getElementById('painelDireita');
const painelEsquerda = document.getElementById('painelEsquerda');
const botaoCadastrar = document.getElementById('cadastrar');
const botaoEntrar = document.getElementById('entrar');

botaoCadastrar.addEventListener('click', () => {
    container.classList.add('cadastroAtivo');
    painelDireita.style.display = 'none';
    painelEsquerda.style.display = 'block';
});

botaoEntrar.addEventListener('click', () => {
    container.classList.remove('cadastroAtivo');
    painelDireita.style.display = 'block';
    painelEsquerda.style.display = 'none';
});
