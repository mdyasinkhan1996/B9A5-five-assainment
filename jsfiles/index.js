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
            alertShow('Seat not available')
        }
    }else{
        alertShow('Already 4 sates selected')
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
        alertShow('Invalid Cupon')
     }
}

const phonenumber = document.getElementById('phone');
phonenumber.addEventListener('keyup', function(event){
    const seatnum = totalSeat('selected-seat');
    if(phonenumber.value.length > 0 && seatnum > 0){
        addClassList('nestBtn', 'btn-selected')
        removeClassList('nestBtn', 'btn-disabled')
    }else if(seatnum > 0){
        addClassList('nestBtn', 'btn-disabled')
        removeClassList('nestBtn', 'btn-selected')
        alertShow('Give pnone number');
    }else{
        alertShow('Before select your seat');
    }
})
function successBtn(){
    document.getElementById('my_modal_2').showModal();
}
function pageReload(){
    location.reload();
}

