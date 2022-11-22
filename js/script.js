let data = new Date();
let ano = data.getFullYear();
let hoje = data.toLocaleDateString();
let hora = data.toLocaleTimeString();

let dataDocumento = document.querySelector("#data")
dataDocumento.innerHTML = `Você acessou este site no dia ${hoje}, às ${hora}.`;

let nascimento = 1985;
let atual = ano.valueOf();

let idade = atual - nascimento;

