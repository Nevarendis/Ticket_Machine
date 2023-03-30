let discount=0;
let price=0;
let inputCount=0;
let inputValues=0;
let database={}

function createInputs()
{
    inputCount++;

    const Parent = document.getElementById("bus_stop1");
    
    const inPut1 = document.createElement("input");
    inPut1.style.marginRight = "10px";
    inPut1.setAttribute("placeholder", "Bus Stop");
    inPut1.setAttribute("id", "BusStop" + inputCount);
    const inPut2 = document.createElement("input");
    inPut2.setAttribute("placeholder", "Distance");
    inPut2.setAttribute("id","Distance" + inputCount);
    const br = document.createElement("br");
    Parent.append(inPut1, inPut2, br);
    

}
function saveInputs()
{
    for (let i = 1; i <= inputCount; i++)
    {
        const inputbusstop = document.getElementById("BusStop" + i).value;
        const inputdistance = document.getElementById("Distance" +i).value;
        database[inputbusstop]=inputdistance;


    }
}

function price_KM(event)
{
    
    price = event.value;
}
function selectDiscount(event)
{
    
    discount = event.value;
}
function ticketButton()
{
    const values = document.getElementById("summary");
    let  price_KM = document.getElementById("price");
    

}
createInputs();


