const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const telefone = document.querySelector('#telefone');
const textarea = document.querySelector('#textarea')
const enviar = document.querySelector('#enviar')

console.log(nome, email, telefone, textarea, enviar)

let dados = {'nome': nome.value, 'email': email.value, 'telefone': telefone.value, 'textarea': textarea.value};

console.log(dados)