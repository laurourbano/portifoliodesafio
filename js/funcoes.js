
function validaInput(){
    const inputObject = document.getElementById('id1');
    if (!inputObject.checkValidity()){
      document.getElementById("demo").innerHTML = inputObject.validationMessage;
    }
}
let lauro = localStorage
console.log(lauro)

