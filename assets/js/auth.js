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


const usuarios = JSON.parse(localStorage.getItem('cadastros')) || [];
const submitCadastrar = document.getElementById('submitCadastrar');
const submitLogin = document.getElementById('submitLogin');

function cadastrar() {
    const nome = document.getElementById('inputNomeCadastrar').value;
    const email = document.getElementById('inputEmailCadastrar').value;
    const senha = document.getElementById('inputSenhaCadastrar').value;
    const confirmarSenha = document.getElementById('inputConfirmarSenhaCadastrar').value;
    const termos = document.getElementById('termos').checked;

    if (nome === '' || email === '' || senha === '' || confirmarSenha === '') {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert("Por favor, insira um e-mail válido!");
        return;
    }

    if (condition) {
        
    }

    if (usuarios.some(usuario => usuario.email === email)) {
        alert("Este e-mail já está cadastrado!");
        return;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    if (!termos) {
        alert("Por favor, aceite os termos de uso!");
        return;
    }

    const novoCadastro = {
        nome: nome,
        email: email,
        senha: senha
    };

    usuarios.push(novoCadastro);
    localStorage.setItem('cadastros', JSON.stringify(usuarios));
    alert("Cadastro realizado com sucesso!");
    document.getElementById('inputNomeCadastrar').value = '';
    document.getElementById('inputEmailCadastrar').value = '';
    document.getElementById('inputSenhaCadastrar').value = '';
    document.getElementById('inputConfirmarSenhaCadastrar').value = '';
    document.getElementById('termos').checked = false;
}

submitCadastrar.addEventListener('click', (event) => {
    event.preventDefault();
    cadastrar();
    console.log(usuarios);
});


function login() {
    
}