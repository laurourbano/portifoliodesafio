class Mensagem {

  //define quais os campos quando criamos um novo objeto baseado na classe;

  constructor() {

    this.id = 1;
    this.nome = '';
    this.email = '';
    this.telefone = '';
    this.textarea = '';
    this.arrayMensagens = [];

  }

  //acessa o método lerDados e atribui a mensagem, depois verifica se são válidos(método validaCampos) e acessa o método adicionar, por último acessa o método listaMensagens;

  salvar() {

    let mensagem = this.lerDados();

    if (this.validaCampos(mensagem)) {
      this.adicionar(mensagem);
    };

    this.listaMensagens();

  }

  //método criado para renderizar o conteúdo das mensagens na nova página;

  listaMensagens() {
    let mensagemTela = document.querySelector('#dadosMensagem');
    let p = document.createElement('p');
    p.innerHTML = 'lauro'
    mensagemTela.appendChild(p.innerHTML)
  }

  //captura os dados dos inputs e associa aos atributos do construtor para utilizar em outras partes do código;

  lerDados() {

    let mensagem = {}

    mensagem.id = this.id;
    mensagem.nome = document.formContato.nome.value;
    mensagem.email = document.formContato.email.value;
    mensagem.telefone = document.formContato.telefone.value;
    mensagem.textarea = document.formContato.textarea.value;
    return mensagem;

  };

  //método que adiciona as novas mensagens no array de mensagens e incrementa o id;

  adicionar(mensagem) {

    this.arrayMensagens.push(mensagem);
    this.id++;

  };

  //transformar os objetos vindos do array de mensagens para json 'let json = JSON.stringfy(mensagem);';

  jsonString(mensagem) {
    let stringMensagem = JSON.stringfy(mensagem);
    return stringMensagem;
  };

  //armazenar o json em formato string no localStorage 'let armazenamento = localStorage.setItem(json);

  armazenamentoLocal(stringMensagem) {
    let armazenaObjeto = localStorage.setItem(stringMensagem);
    return armazenaObjeto;
  };

  //recuperar o JSON 'let mensagemRecuperada = localStorage.getItem(JSON.parse(json))';

  recuperaJson(armazenaObjeto) {
    let mensagemRecuperada = localStorage.getItem(JSON.parse(armazenaObjeto));
    return mensagemRecuperada;
  };

  //verifica se os inputs não estão vazios;

  validaCampos(mensagem) {

    let msg = '';

    if (mensagem.nome == '') {
      msg += "- Informe o seu nome \n";
    };
    if (mensagem.email == '') {
      msg += "- Informe o seu email \n";
    };
    if (mensagem.telefone == '') {
      msg += "- Informe o seu telefone \n";
    };
    if (mensagem.textarea == '') {
      msg += "- Escreva sua mensagem \n";
    };
    if (msg != '') {

      alert(msg);
      return false;

    }
    return true;

  };

  //método que finaliza o processo;

  cancelar() {

    return;

  };

}

var mensagem = new Mensagem();