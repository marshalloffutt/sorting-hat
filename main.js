// Print to Dom Function
const printToDom = (stringToPrint, selectedDiv) => {
    document.getElementById(selectedDiv).innerHTML += stringToPrint;
};

// Array for hogwarts to define the houses as an array
const hogwarts = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];

// Input value from DOM set as a variable
let yerAWizard = document.getElementById('inputName');

// Unhides the form
sortFormCard = () => {
   document.getElementById('form').classList.replace('d-none', 'd-block')
};

// House Card Builder
const houseCardBuilder = (name) => {
    let randomizer = Math.floor((Math.random() * hogwarts.length));
    let house = hogwarts[randomizer];
    let domString = `<div class="card d-flex row justify-content-center w-25 m-2">
  <div class="card-body justify-content-center" id="card">
    <h5 class="name text-center">${name}</h5>
    <p class="card-text text-center">${house}</p>
    <button href="#" class="btn btn-danger deleteButton">Expel</button>
  </div>
</div>`;
    printToDom(domString, 'house-cards');
};

// Button Event listeners
document.getElementById('formButton').addEventListener("click", sortFormCard);
document.getElementById('sortButton').addEventListener("click", (e) => {
    e.preventDefault();
    houseCardBuilder(yerAWizard.value);
});
