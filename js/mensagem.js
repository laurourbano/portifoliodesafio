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

  //MELHORAR ESSE TRECHO - PASSAR COMO OBJETO COM LOOP
  for (let i in arr) {
    arr[i].push(objetoMensagem);
    localStorage.meuArr = JSON.stringify(arr);
  }
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
    mensagens.append(p);
  };

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