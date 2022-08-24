//todo Sukurti kalkuliatorių su OOP ES6

//todo rekomendaciniai planas:
/* susikurti klasę Calculator kurios konstruktorius nustato pradines currentOperandTextElement ir previousOperandTextElement reikšmes - gali but naudojami updateDisplay() metode atnaujinti vaizda;
taip pat properties: currentOperand - skaicius esamas; previous operand - buves; operation - operacija; 
taip pat metodus: 
clear() - paspaudus AC mygtuką; gali būti panaudotas nustatyti pradines currentOperand, previousOperand ir operation vertes; 
delete() - paspaudus DEL mygtuką istrinam paskutinį įvestą skaičių; 
appendNumber(number) - pridėti paspaustą mygtuką į currentOperand esamą reikšmę; 
chooseOperation(operation) - jei turim previousOperand, tai galima atnaujinti this.operantion ir kviesti compute();
compute() - atlikti skaičiavimą naudojant this.previousOperand, this.currentOperand ir this.operation; 
updateDisplay() - skirtas updatinti current ir previousOperantTextElement.innerText - atvaizdavimui; 

susirinkti į const su DOM selectoriais: 
numberButtons; operationButtons; equalsButton; deleteButton; allClearButton; previousOperandTextElement; currentOperandTextElement; 
susidėti eventListeners and surinktų const; */

//? rekomenduojamas darbo flow
/* pasirašom klasę su metodais, bet nesirašo dar jų implementacijos;
susirenkam į constantas HTML elementus;
susikuriam naują objektą naudodami sukurtą klasę, galima įsidėt sukurtą objektą į pvz. const calculator; 
apsirašom event listenerius - kiekvienas iš jų kaip callback funkciją kviečia calculator objekto metodą atitinkantį veiksmą ir papildomai calculator.updateDisplay()
kad atnaujinti UI; 
apsirašom metodus; 
kai visas funkcionalumas veikia, CSS faile gražinam UI, rekomenduoju naudot grid mygtukų išdėliojimui;  
*/

//! nebūtina sekti rekomendacijų, nes galimų sprendimų yra n, bet surašiau, kad padėt, jei išvis nėra minčių;
//! geriau skirkit pradžioj šiek tiek laiko pagalvot bendrai bendram planui aptart ir gal savo flow sugalvosit

class Calculator {
  constructor() {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = "";
  }

  updateDisplay() {}
  clear() {}
  delete() {}
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }
  compute() {
    let result;
    switch (this.operation) {
      case "+":
        result = this.previousOperand + this.currentOperand;
        break;
      case "-":
        result = this.previousOperand - this.currentOperand;
        break;
      case "*":
        result = this.previousOperand * this.currentOperand;
        break;
      case "÷":
        result = this.previousOperand / this.currentOperand;
        break;
    }
    this.currentOperand = result;
  }
  chooseOperation(operation) {
    if (this.currentOperand === "") return;

    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }
}

const numberButtons = document.querySelectorAll("[data-number]");

const operationButtons = document.querySelectorAll("[data-operation]");

const equalsButton = document.querySelector("[data-equals]");

const deleteButton = document.querySelector("[data-delete]");

const allClearButton = document.querySelector("[data-all-clear]");

const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);

const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);

    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);

    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();

  calculator.updateDisplay();
});

//   allClearButton.addEventListener('click', button => {

//     calculator.clear()

//     calculator.updateDisplay()

//   })

//   deleteButton.addEventListener('click', button => {

//     calculator.delete()

//     calculator.updateDisplay()

//   })
