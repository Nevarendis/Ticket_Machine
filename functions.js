let discount = 0;
let price = 0;
let inputCount = 0;
let inputValues = 0;
let database = {};
let startbusstop = "";
let endbusstop = "";

function createInputs() {
    inputCount++;

    const Parent = document.getElementById("bus_stop1");

    const inPut1 = document.createElement("input");
    inPut1.style.marginRight = "10px";
    inPut1.setAttribute("placeholder", "Bus Stop");
    inPut1.setAttribute("id", "BusStop" + inputCount);
    const inPut2 = document.createElement("input");
    inPut2.setAttribute("placeholder", "Distance");
    inPut2.setAttribute("id", "Distance" + inputCount);
    const br = document.createElement("br");
    Parent.append(inPut1, inPut2, br);


}
function saveInputs() {
    database = {};

    for (let i = 1; i <= inputCount; i++) {
        const inputbusstop = document.getElementById("BusStop" + i).value;
        const inputdistance = document.getElementById("Distance" + i).value;
        database[inputbusstop] = inputdistance;
    }

    const Parent = document.getElementById("selectedstops");
    Parent.innerHTML = "";
    const selectfrom = document.createElement("select");
    Parent.append(selectfrom);
    selectfrom.onchange = startbusstop1;


    const citiesArray = Object.keys(database);

    for (let i = 1; i <= inputCount; i++) {
        const option = document.createElement("option");
        option.innerHTML = citiesArray[i - 1];
        option.value = citiesArray[i - 1];
        selectfrom.append(option);
    }

    const Parent1 = document.getElementById("selectedstops2");
    Parent1.innerHTML = "";
    const selectto = document.createElement("select");
    Parent1.append(selectto);
    selectto.onchange = endbusstop1;

    for (let i = 1; i <= inputCount; i++) {
        const option1 = document.createElement("option");
        option1.innerHTML = citiesArray[i - 1];
        option1.value = citiesArray[i - 1];
        selectto.append(option1);
    }
}

function startbusstop1(event) {
    startbusstop = event.value;
}

function endbusstop1(event) {
    endbusstop = event.value;
}

function price_KM(event) {
    price = event.value;
}

function selectDiscount(event) {
    discount = event.value;
}

function ticketButton() {
    const values = document.getElementById("summary");
    let price_KM = document.getElementById("price");
}

createInputs();


