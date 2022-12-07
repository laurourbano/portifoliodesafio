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
  if (objetoMensagem.nome == '') {
    alert('Digite seu nome')
  } else if (objetoMensagem.email == '') {
    alert('Digite seu email')
  } else if (objetoMensagem.telefone == '') {
    alert('Digite seu telefone')
  } else if (objetoMensagem.textarea == '') {
    alert('Digite sua mensagem')
  } else {
    arr.push(objetoMensagem);
    localStorage.meuArr = JSON.stringify(arr);
    let sucesso = document.querySelector('.sucesso');
    setTimeout(function () {
      sucesso.innerHTML = "<div class='alert alert-success p-2 shadow border border-info' role='alert'><strong>Mensagem enviada com sucesso!</strong></div>";
    }, 1 * 1000);
    setTimeout(() => {
      sucesso.innerHTML = "";
    }, 5 * 1000);
    event.preventDefault()
    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('telefone').value = "";
    document.getElementById('textarea').value = "";
    document.querySelector('.sucesso').focus();
    document.getElementById('nome').focus();
  };

};

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

};

function excluir() {
  if (confirm('Deseja realmente limpar todas as mensagens enviadas?')) {
    arr = [];
    localStorage.meuArr = JSON.stringify(arr)
  };
  return
};