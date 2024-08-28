const resultCalc = document.getElementById("resultado");
console.log(resultCalc);
let resultado = "0";

function atualizar() {
  resultCalc.innerHTML = resultado;
  while (resultCalc.innerHTML.length > 9) {
    resultCalc.innerHTML = resultCalc.innerHTML.slice(0, -1);
    resultado = resultado.slice(0 , -1)
  }
}

// Zera a calculadora
function limpar() {
  resultado = "0";
  atualizar();
}

// Verifica se já existe algum caracter especial digitado
function input(caracter) {
  const operadores = [".", "/", "*", "+", "-"];

  if (operadores.includes(caracter)) {
    let ultimoCaracter = resultado[resultado.length - 1];

    console.log(ultimoCaracter);

    if (operadores.includes(ultimoCaracter)) {
      // Não faz nada
    } else {
      resultado += caracter;
      atualizar();
    }

    return;
  }

  if (resultCalc.innerHTML == "0") {
    resultCalc.innerHTML = "";
    resultado = "";
  }

  resultado += caracter;
  atualizar();
}

function apagar() {
  if (resultCalc.innerHTML.length == 1) {
    resultCalc.innerHTML = "0";
    resultado = "0";
    return;
  }

  resultado = resultado.slice(0, -1);
  atualizar();
}

// Função para realizar as operações
function calcular() {
  resultado = eval(resultado);
  atualizar();
}
