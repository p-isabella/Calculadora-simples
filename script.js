let displayJS = document.getElementById('display');
let tela = '';
let resultado = '';
let valorAnterior;
let operadores = ['+', '-','*', '**', '/'];


const PegaValor = function(valor){
    if (operadores.includes(valor)) {
        if (operadores.includes(tela[tela.length - 1])) {
           // pass
        } else {
            tela += valor;
            displayJS.innerHTML = tela;
        }
    } else {
    tela += valor;
    displayJS.innerHTML = tela;
    }
} 

const CalculaValor = function(){
    resultado = eval(tela);
    displayJS.innerHTML = resultado;
    }

const Limpa = function(){
    tela = '';
    displayJS.innerHTML = '';
}
