class Mensagem {

  constructor() {
    this.id = 1;
    this.nome = '';
    this.email = '';
    this.telefone = '';
    this.textarea = '';
    this.arrayMensagens = [];
  };

  adicionar() {
    let mensagem = this.dadosFormulario();

    console.log(mensagem)
  }
  dadosFormulario() {
    let objetoMensagem = {};

    objetoMensagem.nome = document.forms.formContato.nome.value;
    objetoMensagem.email = document.forms.formContato.email.value;
    objetoMensagem.telefone = document.forms.formContato.telefone.value;
    objetoMensagem.textarea = document.forms.formContato.textarea.value;
  }
  validaInputs() {
    let msg = '';
    if (objetoMensagem.nome.length === 0) {
      let msgInput = document.querySelector('.input');
      msgInput.innerText = 'Digite o seu nome';
    } else if (objetoMensagem.email.length === 0){
      let msgInput = document.querySelector('.input');
      msgInput.innerText = 'Digite o seu nome';

    }

  }
};