var arr = [{}];

function adicionar() {
  if (localStorage.meuArr) {
    arr = JSON.parse(localStorage.getItem('meuArr'));
  };
  let objetoMensagem = {};
  objetoMensagem.nome = document.getElementById('nome').value;
  objetoMensagem.email = document.getElementById('email').value;
  arr.push(objetoMensagem.nome, objetoMensagem.email);
  document.getElementById('nome').value = "";
  document.getElementById('email').value = "";
  localStorage.meuArr = JSON.stringify(arr);
};

function mostrarItens() {
  let mensagens = document.getElementById('dadosMensagens');
  mensagens.innerHTML = "";
  if (localStorage.meuArr) {
    arr = JSON.parse(localStorage.getItem('meuArr'));
  };

  for (let i in arr) {
    let p = document.createElement('p');
    p.innerHTML = arr[i];
    mensagens.append(p);
  };
};

function excluir() {
  arr = [];
  localStorage.meuArr = JSON.stringify(arr)
}