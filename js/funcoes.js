class Mensagem {

  constructor() {
    this.id = 1;
    this.nome = '';
    this.email = '';
    this.telefone = '';
    this.textarea = '';
    this.arrayMensagens = [];
  }

  salvar() {
    let mensagem = this.lerDados();

    if (this.validaCampos(mensagem)) {
      this.adicionar(mensagem);
    }

    this.listarDados();

  }

  listarDados() {
    let dadosMensagem = document.querySelector("#dadosMensagem");

    for (let i = 0; i < this.arrayMensagens.length; i++) {
//verificar
      // Criar elemento
      var conteudo = document.createElement('p');

      // Criar o nó de texto
      var texto = document.createTextNode("Um título qualquer");

      // Anexar o nó de texto ao elemento h1
      conteudo.appendChild(texto);

      // Agora sim, inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
      elemento_pai.appendChild(conteudo);
    }
  }

  adicionar(mensagem) {
    this.arrayMensagens.push(mensagem);
    this.id++;
  }

  lerDados() {
    let mensagem = {}

    mensagem.id = this.id;
    mensagem.nome = document.formContato.nome.value;
    mensagem.email = document.formContato.email.value;
    mensagem.telefone = document.formContato.telefone.value;
    mensagem.textarea = document.formContato.textarea.value;

    return mensagem;
  }

  validaCampos(mensagem) {
    let msg = '';

    if (mensagem.nome == '') {
      msg += "- Informe o seu nome \n";
    }
    if (mensagem.email == '') {
      msg += "- Informe o seu email \n";
    }
    if (mensagem.telefone == '') {
      msg += "- Informe o seu telefone \n";
    }
    if (mensagem.textarea == '') {
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

var mensagem = new Mensagem();