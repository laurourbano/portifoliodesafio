var arr = [];

function adicionar() {
  if (localStorage.meuArr) {
    arr = JSON.parse(localStorage.getItem('meuArr'));
  };
  let objetoMensagem = {};
  objetoMensagem.nome = document.getElementById('nome').value;
  objetoMensagem.email = document.getElementById('email').value;
  objetoMensagem.telefone = document.getElementById('telefone').value;
  objetoMensagem.textarea = document.getElementById('textarea').value;

  arr.push(objetoMensagem);

  localStorage.meuArr = JSON.stringify(arr);

};

function meuObjeto(arg) {
  return arg
}

function mostrarItens() {
  let mensagens = document.getElementById('dadosMensagens');
  mensagens.innerHTML = '';
  if (localStorage.meuArr) {
    arr = JSON.parse(localStorage.getItem('meuArr'));
  };

  for (let i in arr) {
    let p = document.createElement('p');
    p.innerHTML = "Nome: " + arr[i].nome + '<br> Telefone: ' + arr[i].telefone + '<br> E-mail: ' + arr[i].email + '<br> Mensagem enviada: ' + arr[i].textarea;
    mensagens.append(p);
    p.classList.add('border', 'border-secondary', 'p-2', 'my-2')
  };
  alert(arr.nome[i]);


};

function excluir() {
  arr = [];
  localStorage.meuArr = JSON.stringify(arr)
}

function cancelar() {
  document.getElementById('nome').value = "";
  document.getElementById('email').value = "";
  document.getElementById('telefone').value = "";
  document.getElementById('textarea').value = "";

  return
}