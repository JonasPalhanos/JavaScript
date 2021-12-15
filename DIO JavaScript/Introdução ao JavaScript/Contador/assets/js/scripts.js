var currentNumberWrapper = document.getElementById('currentNumber');
let buttonSubtrair = document.getElementById('subtrair');
let buttonAdicionar = document.getElementById('adicionar');
var currentNumber = 0;
let count = currentNumber;

buttonAdicionar.disabled = false;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    count = currentNumber;

    //Limita o contador a zero, desabilitando o botão increment
    /*
    if(count >= 10){
        buttonAdicionar.disabled = true;
    }else{
        buttonSubtrair.disabled = false;
    }*/

    //Muda a cor do numero para preto caso maior que zero
    if(count >= 0){
        document.getElementById('currentNumber').style.color = "#000";
    }

}
function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    count = currentNumber;

    //Limita o contador a zero, desabilitando o botão decrement
    /*
    if(count <= 0){
        buttonSubtrair.disabled = true;
    }else{
        buttonAdicionar.disabled = false;
    }*/

    //Muda a cor do numero para vermelho caso negativo
    if(count < 0){
        document.getElementById('currentNumber').style.color = "#FF0000";
    }

}

//Metodos increment e decrement usando addEventListener
/*
let subtrair = document.querySelector('#subtrair');
let adicionar = document.querySelector('#adicionar');

subtrair.addEventListener('click', ()=>{
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
})

adicionar.addEventListener('click', ()=>{
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
})
*/