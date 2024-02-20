function seatNumber(id){
    const seat = totalSeat('selected-seat');
    const availseat = totalSeat('availableSeats');
    const selectSeat = document.getElementById('selected-seat');
    const selectSeats = document.getElementById('select-seat');

    if( seat < 4){
        
        if(availseat > 0){
            selectSeat.innerText = seat + 1;
            selectSeats.innerText = seat + 1;
            // set beground Color
            addClassList(id, 'btn-disabled')
            addClassList(id, 'btn-selected')

            // available Seat
            const seatText = document.getElementById('availableSeats');
            seatText.innerText = availseat - 1;

            // ramove demo
            addClassList('removeSeatItem', 'hidden')
            // append seat
            appendFormTableChild(id)
            priceCalaulate()
            
            // cupon apply button anable
            const seatnum = totalSeat('selected-seat');
            if(seatnum==4){
                removeClassList('cuponBtn', 'btn-disabled')
                addClassList('cuponBtn', 'btn-selected')
            }
        }else{
            console.log('Seat not available')
        }
    }else{
        console.log('Too many selected seat')
    }
    
    
    // cupon discount price
}
function discountprice(){
     const getCuponText = document.getElementById('cuponInput');
     const getCuponValue = getCuponText.value;
     if( getCuponValue === 'NEW15'){
        discountNewPrice(15);
        addClassList('cuponBtn', 'btn-disabled')
        removeClassList('cuponBtn', 'btn-selected')
     }else if( getCuponValue === 'Couple 20'){
        discountNewPrice(20);
        addClassList('cuponBtn', 'btn-disabled')
        removeClassList('cuponBtn', 'btn-selected')
     }else{
        console.log('Invalid Cupon');
     }
}
function successBtn(){
    const phonenumber = document.getElementById('phone');
    const phoneText = phonenumber.value;
    
    const seatnum = totalSeat('selected-seat');
    if(seatnum > 0){
        if(phoneText.length > 1){
            document.getElementById('my_modal_2').showModal();
        }else{
            console.log('worrng')
        }
    }
    console.log(phoneText.length);
}
function pageReload(){
    location.reload();
}

