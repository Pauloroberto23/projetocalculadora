// seleção de elementos
const multiplicationform = document.querySelector("#multiplication-form");
const numberInput  = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTable = document.querySelector("#multiplicatiion-operations");

//funções
const createTable = (number, multiplicatorNumber) => {
  multiplicationTable.innerHTML = "";

  for (i =1; i <= multiplicatorNumber; i++){
   const result = number * i;

    const template = `<div class="row">
    <div class= "operation">${number} x ${i} = </div>
    <div class="result">${result}</div>
    </div>`;

    const parser = new DOMParser() //parser quer dizer analizar

    const htmlTemplate = parser.parseFromString(template, "text/html");

    const row = htmlTemplate.querySelector(".row");

    multiplicationTable.appendChild(row);




  }
};


//eventos 
multiplicationform.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.Value;

    const multiplicatorNumber = +multiplicationInput.Value;
    
    if (!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber);

});
