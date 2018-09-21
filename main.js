// Print to Dom Function
const printToDom = (stringToPrint, selectedDiv) => {
    document.getElementById(selectedDiv).innerHTML += stringToPrint;
};

const nameInputElem = document.getElementById('nameInput');

// Unhide the form
sortFormCard = () => {
   document.getElementById('form').classList.replace('d-none', 'd-block')
};

// House card builders
const gryffindorCardBuilder = () => {
    let domString = `<div class="gryff-card card w-25 m-2">
  <div class="card-body">
    <h5 class="name">${name}</h5>
    <p class="card-text">Gryffindor</p>
    <button href="#" class="btn btn-danger deleteButton" id=${counter}>Expel</button>
  </div>
</div>`;
    printToDom(domString, 'house-cards');
}

const slytherinCardBuilder = () => {
    let domString = `<div class="slytherin-card card w-25 m-2">
  <div class="card-body">
    <h5 class="name">${name}</h5>
    <p class="card-text">Slytherin</p>
    <button href="#" class="btn btn-danger deleteButton" id=${counter}>Expel</button>
  </div>
</div>`;
    printToDom(domString, 'house-cards');
}

const ravenclawCardBuilder = () => {
    let domString = `<div class="ravenclaw-card card w-25 m-2">
  <div class="card-body">
    <h5 class="name">${name}</h5>
    <p class="card-text">Ravenclaw</p>
    <button href="#" class="btn btn-danger deleteButton" id=${counter}>Expel</button>
  </div>
</div>`;
    printToDom(domString, 'house-cards');
}

const hufflepuffCardBuilder = () => {
    let domString = `<div class="ravenclaw-card card w-25 m-2">
  <div class="card-body">
    <h5 class="name">${name}</h5>
    <p class="card-text">${house}</p>
    <button href="#" class="btn btn-danger deleteButton" id=${counter}>Expel</button>
  </div>
</div>`;
    printToDom(domString, 'house-cards');
}

// House randomizer
const houseSelection =() => {
    let randomizer = Math.floor((Math.random() * 5) + 1);
    if(randomizer === 1) {
        gryffindorCardBuilder();
    } else if(randomizer === 2) {
        slytherinCardBuilder();
    } else if(randomizer === 3) {
        ravenclawCardBuilder();
    } else {
        hufflepuffCardBuilder();
    }
};

// Button Event listeners
document.getElementById('formButton').addEventListener("click", sortFormCard);
document.getElementById('sortButton').addEventListener("click", houseSelection);