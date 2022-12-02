class Cadastro {

  constructor() {
    this.id = 1;
    this.nome = '';
    this.email = '';
    this.telefone = '';
    this.textarea = '';
    this.arrayCadastros = [];
  }

  salvar() {
    let cadastro = this.lerDados();

    if (this.validaCampos(cadastro)) {
      this.adicionar(cadastro);
    }

    this.listarDados();

  }

  listarDados() {
    let dadosMensagem = document.querySelector("#dadosMensagem");

    for (let i = 0; i < this.arrayCadastros.length; i++) {
      
    }
  }

  adicionar(cadastro) {
    this.arrayCadastros.push(cadastro);
    this.id++;
  }

  lerDados() {
    let cadastro = {}

    cadastro.id = this.id;
    cadastro.nome = document.formContato.nome.value;
    cadastro.email = document.formContato.email.value;
    cadastro.telefone = document.formContato.telefone.value;
    cadastro.textarea = document.formContato.textarea.value;

    return cadastro;
  }

  validaCampos(cadastro) {
    let msg = '';

    if (cadastro.nome == '') {
      msg += "- Informe o seu nome \n";
    }
    if (cadastro.email == '') {
      msg += "- Informe o seu email \n";
    }
    if (cadastro.telefone == '') {
      msg += "- Informe o seu telefone \n";
    }
    if (cadastro.textarea == '') {
      msg += "- Escreva sua mensagem \n";
    }
    if (msg != '') {
      alert(msg);
      return false
    }
    return true
  }

  cancelar() {
    return
  }
}

var cadastro = new Cadastro();