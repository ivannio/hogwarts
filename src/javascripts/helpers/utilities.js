const printToDom = (stringToPrint, divID) => {
  const selectedDiv = document.getElementById(divID);
  selectedDiv.innerHTML = stringToPrint;
};

export default { printToDom };
