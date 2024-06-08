function adicionarClasse(id) {
    // Esconde todas as divs
    for (let i = 1; i <= 5; i++) {
      document.getElementById('div' + i).classList.remove('visivel');
      document.getElementById('div' + i).classList.add('escondido');
    }
    // Mostra apenas a div selecionada
    document.getElementById(id).classList.remove('escondido');
    document.getElementById(id).classList.add('visivel');
  }


// Equação Par Impar
const valor1 = document.getElementById("valor1");
const resultadoElement = document.getElementById("resultado1");

function verificarPar(){

    const input1 = valor1.value

    if (input1 % 2 === 0) {
        resultadoElement.textContent = ` É um número par`;
    } else {
        resultadoElement.textContent = ` É um número ímpar`;
    }
}

// Equação Primo ou Composto
const valor2 = document.getElementById("valor2");
const resultadoElement2 = document.getElementById("resultado2");

function verificarPrimo(){

    const n = valor2.value

    if (n <= 1) {
        return resultadoElement2.textContent = "O número deve ser maior que 1";
    } else if (n === 2) {
        return resultadoElement2.textContent = "O número é primo";
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return resultadoElement2.textContent = "O número é Composto";
            }
        }
        return resultadoElement2.textContent = "O número é Primo";
    }
    
}

//Equação Modulo
const valueMod1 = document.getElementById("valueMod1");
const valueMod2 = document.getElementById("valueMod2");
const resultadoElement3 = document.getElementById("resultado3");

function verificarMod() {

    const input1 = valueMod1.value
    const input2 = valueMod2.value

    resultadoElement3.textContent = `${input1 % input2}`;

}

// Equação MMC
const valueMMC1 = document.getElementById("valueMMC1");
const valueMMC2 = document.getElementById("valueMMC2");
const resultadoElement4 = document.getElementById("resultado4");

function verificarMMC() {

    let num1 = valueMMC1.value
    let num2 = valueMMC2.value

    
        var resto, x, y;
        x = num1;
        y = num2;
        while(resto!=0){
          resto = x % y;
          x = y;
          y = resto;
        }

    resultadoElement4.textContent = `${(num1*num2)/x }`;

}

// Equação MDC
const valueMDC1 = document.getElementById("valueMDC1");
const valueMDC2 = document.getElementById("valueMDC2");
const resultadoElement5 = document.getElementById("resultado5");

function verificarMDC() {

    let a = valueMDC1.value
    let b = valueMDC2.value

        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
    

    resultadoElement5.textContent = `${a}`;
    
}

// Background animate
const equations = [
    "2 + 3",
    "5 - 1",
    "6 * 2",
    "8 / 4",
    "10 / 2",
    "7 + 3",
    "4 * 3",
    "9 - 2",
    "12 / 3",
    "10 * 1",
    "6 + 4",
    "8 / 2",
    "5 * 2",
    "9 - 4",
    "3 + 7",
    "6 / 2",
      "√" ,
      "x",
      "+",
      "-",
    "x2",
    "&",
    "/"
];

const equationContainer = document.getElementById('equations');

equations.forEach((equation, index) => {
    const equationElement = document.createElement('div');
    equationElement.classList.add('equation');
    equationElement.textContent = equation;
    equationElement.style.left = `${Math.random() * 100}vw`;
    equationElement.style.animationDuration = `${Math.random() * 8 + 4}s`; 
    equationContainer.appendChild(equationElement);
});


