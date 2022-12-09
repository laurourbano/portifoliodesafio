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
    sucesso.innerHTML = "<div class='alert alert-success p-2 shadow border border-info' role='alert'><strong>Mensagem enviada com sucesso!</strong></div>";
    document.querySelector('.sucesso').focus();
    setTimeout(() => {
      sucesso.innerHTML = "";
    }, 3 * 1000);

    event.preventDefault();

    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('telefone').value = "";
    document.getElementById('textarea').value = "";
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


function mascara(o,f){
  v_obj=o
  v_fun=f
  setTimeout("execmascara()",1)
}
function execmascara(){
  v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
  v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
  v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}
function id( el ){
return document.getElementById( el );
}
window.onload = function(){
id('telefone').onkeyup = function(){
  mascara( this, mtel );
}
}