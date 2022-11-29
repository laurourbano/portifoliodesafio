
function validaInput(){
    const inputObject = document.getElementById('id1');
    if (!inputObject.checkValidity()){
      document.getElementById("demo").innerHTML = inputObject.validationMessage;
    }
}
let lauro = localStorage
let input = document.querySelector(".id1")

lauro.innerHTML = input.innerHTML
console.log(input.innerHTML)

let dados = document.querySelector("#demo");
dados.innerText = lauro.innerHTML

