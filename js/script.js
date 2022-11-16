let data = new Date()
let hoje = data.toLocaleDateString()
let hora = data.toLocaleTimeString()

let dataDocumento = document.querySelector("#data");
dataDocumento.innerHTML = `Você acessou meu site em ${hoje}, às ${hora}.`