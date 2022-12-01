const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const telefone = document.querySelector('#telefone');
const textarea = document.querySelector('#textarea');
const enviar = document.querySelector('#enviar');

const rnome = document.querySelector('#rnome');
const remail = document.querySelector('#remail');
const rtelefone = document.querySelector('#rtelefone');
const rtextarea = document.querySelector('#rtextarea');
const dadosMensagem = document.querySelector('#dadosMensagem')

function enviarMensagem() {
  localStorage.setItem("nome", document.formContato.nome.value)
  localStorage.setItem("email", document.formContato.email.value)
  localStorage.setItem("telefone", document.formContato.telefone.value)
  localStorage.setItem("textarea", document.formContato.textarea.value)
}

rnome.innerHTML = `Nome: ${localStorage.getItem("nome")}`
remail.innerHTML = `E-mail: ${localStorage.getItem("email")}`
rtelefone.innerHTML = `Telefone: ${localStorage.getItem("telefone")}`
rtextarea.innerHTML = `Texto da Mensagem: ${localStorage.getItem("textarea")
}`

function apagar() {
  if (confirm("deseja realmente apagar?")) {
    localStorage.removeItem("nome")
    localStorage.removeItem("email")
    localStorage.removeItem("telefone")
    localStorage.removeItem("textarea")
    dadosMensagem.innerHTML = ""
  } else {
    return
  }

}