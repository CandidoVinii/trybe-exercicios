let submitBtn = document.querySelector('#envia');
let apaga = document.querySelector('#apaga');
let forms = document.querySelector('#forms')

function handleSubmit(event) {
    event.preventDefault();
}

window.onload = function () {
    submitBtn.addEventListener('click', handleSubmit);
  };