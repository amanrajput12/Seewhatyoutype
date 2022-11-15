const inputvalue = document.getElementById("input");
const outputvalue = document.getElementById("output");

inputvalue.addEventListener("keypress", changeHandler);
function changeHandler() {
  outputvalue.innerHTML = inputvalue.value   
}
