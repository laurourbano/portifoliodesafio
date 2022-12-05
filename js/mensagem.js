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
  arr.push(objetoMensagem.nome, objetoMensagem.email, objetoMensagem.telefone, objetoMensagem.textarea);
  //document.getElementById('nome').value = "";
  //document.getElementById('email').value = "";
  //document.getElementById('telefone').value = "";
  //document.getElementById('textarea').value = "";
  localStorage.meuArr = JSON.stringify(arr);
};

function mostrarItens() {
  let mensagens = document.getElementById('dadosMensagens');
  mensagens.innerHTML = '';
  if (localStorage.meuArr) {
    arr = JSON.parse(localStorage.getItem('meuArr'));
  };

  for (let i in arr) {
    let p = document.createElement('p');
    p.innerHTML = arr[i];
    console.log(arr[i])
    mensagens.append(p);
    p.classList.add('border')
  };
};

function excluir() {
  arr = [];
  localStorage.meuArr = JSON.stringify(arr)
}