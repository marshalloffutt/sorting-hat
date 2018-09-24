// Print to Dom Function
const printToDom = (stringToPrint, selectedDiv) => {
    document.getElementById(selectedDiv).innerHTML += stringToPrint;
};

// Array for hogwarts to define the houses as an array
const hogwarts = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];

// Input value from DOM set as a variable
let yerAWizard = document.getElementById('inputName');

// Counter for expel button
let counter = 0;

// Activate Expel Button
const expelled = () => {
    const expelButtons = document.getElementsByClassName('expel');
    console.log(expelButtons);
  
    for (let i = 0; i < expelButtons.length; i++) {
      const element = expelButtons[i];
      element.addEventListener("click", (e) => {
        // remove card that the button was on
        const buttonIClicked = e.target;
        const cardToDelete = buttonIClicked.parentNode.parentNode;
        cardToDelete.remove();
      })
    }
  };

// Unhides the form
sortFormCard = () => {
   document.getElementById('form').classList.replace('d-none', 'd-block')
};

// House Card Builder
const houseCardBuilder = (name) => {
    if (document.getElementById('inputName').value.length == 0) {
        document.getElementById('validationMessage').innerHTML = "Please enter a name";
        return false;
    } else {
        document.getElementById('validationMessage').innerHTML = '';
    };
    let randomizer = Math.floor((Math.random() * hogwarts.length));
    let house = hogwarts[randomizer];
    let domString =    
        `<div class="card d-flex row border-dark m-2" style="width: 18rem;">
            <div class="card-body justify-content-center" id="card">
                <h5 class="name text-center">${name}</h5>
                <p class="card-text text-center">${house}</p>
                <button href="#" class="expel btn border-dark btn-light deleteButton">Expel</button>
            </div>
        </div>`;
    counter ++;
    printToDom(domString, 'house-cards');
    expelled();
};

 


// Button Event listeners
document.getElementById('formButton').addEventListener("click", sortFormCard);
document.getElementById('sortButton').addEventListener("click", (e) => {
    e.preventDefault();
    houseCardBuilder(yerAWizard.value);
});
