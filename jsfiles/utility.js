function appendFormTableChild(id){
    const tbody = document.getElementById('apendTbodyItem');
    const tr = tbody.appendChild(document.createElement("tr"));
    const list1 = tr.appendChild(document.createElement("td"));
    const list2 = tr.appendChild(document.createElement("td"));
    const list3 = tr.appendChild(document.createElement("td"));
    list1.textContent = `${id}`;
    list2.textContent = "Economoy";
    list3.textContent = "550";
    tbody.appendChild(tr);
}
function totalSeat(element){
    const selectSeat = document.getElementById(element);
    const selectSeatText = selectSeat.innerText;
    const selectEsatNum = parseInt(selectSeatText);
    return selectEsatNum;
}
// priceCalaulate
function priceCalaulate(){
    const seat = totalSeat('selected-seat');
    const totalPriceElement = document.getElementById('totalPrice');
    const grandPriceElement = document.getElementById('grandTotalPrice');
    const price = 550;
    const totalPrice = price * seat;
    totalPriceElement.innerText = totalPrice;
    grandPriceElement.innerText = totalPrice;
    // console.log(totalPrice);

}

function addClassList(element, value){
    const addClass = document.getElementById(element);
    addClass.classList.add(value)
}
function removeClassList(element, value){
    const removeDisable = document.getElementById(element);
    removeDisable.classList.remove(value)
}

// discount new price
function discountNewPrice(value){
    const totalPriceText = document.getElementById('totalPrice').innerText;
    const grandPriceElement = document.getElementById('grandTotalPrice');
    const totalPrice = parseInt(totalPriceText);
    const discount = (value/ 100) * totalPrice;
    const discountprice =  Math.round(discount);
    const newPrice = totalPrice-discountprice
    grandPriceElement.innerText = newPrice;
    console.log(value, discountprice, newPrice);
}