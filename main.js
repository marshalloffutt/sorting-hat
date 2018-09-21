const printToDom = (stringToPrint, selectedDiv) => {
    document.getElementById(selectedDiv).innerHTML += stringToPrint;
};

sortFormCard = () => {
   document.getElementById('form').classList.replace('d-none', 'd-block')
};

document.getElementById('formButton').addEventListener("click", sortFormCard);