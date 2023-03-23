discount=0;
price=0;

function createInputs()
{
    const Parent = document.getElementById("bus_stop1");
    
    const inPut1 = document.createElement("input");
    inPut1.style.marginRight = "10px";
    inPut1.setAttribute("placeholder", "Bus Stop");
    const inPut2 = document.createElement("input");
    inPut2.setAttribute("placeholder", "Distance");
    const br = document.createElement("br");
    Parent.append(inPut1, inPut2, br);
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
    

}
createInputs();