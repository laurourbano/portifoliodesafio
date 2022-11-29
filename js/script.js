//insere variáveis de data para inserir no HTML dinamicamente

let data = new Date();
let ano = data.getFullYear();
let hoje = data.toLocaleDateString();
let hora = data.toLocaleTimeString();

//cria data nas páginas

let dataDocumento = document.querySelector("#data")
dataDocumento.innerHTML += `<small>Você acessou este site no dia ${hoje}, às ${hora}.</small>`;

//calcula idade

let nascimento = 1985;
let atual = ano.valueOf();
let idade = atual - nascimento;

//volta para página anterior | método back da API de histórico do navegador

function voltar() {
  window.history.back();
}