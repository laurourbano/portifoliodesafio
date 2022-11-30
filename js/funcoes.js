const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const telefone = document.querySelector('#telefone');
const textarea = document.querySelector('#textarea');
const enviar = document.querySelector('#enviar');
const exemplo = document.querySelector('.exemplo');

function enviarMensagem() {
  if (localStorage.cont) {
    localStorage.cont = Number(localStorage.cont) + 1;
  } else {
    localStorage.cont = 1;
  }
  cadastro = document.getElementById('nome').value + ';' + document.getElementById('email').value + ';' + document.getElementById('telefone').value + ';' + document.getElementById('textarea').value;
  localStorage.setItem("cadastro_" + localStorage.cont, cadastro);
  exemplo.innerHTML = localStorage.cadastro;
}
