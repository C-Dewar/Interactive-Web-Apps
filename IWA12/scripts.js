// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line

// Book 1

// Get elements and values
statusElement0 = document.querySelector('#book1 .status')
statusValue0 = statusElement0.innerHTML // Overdue

reserveElement0 = document.querySelector('#book1 .reserve')
reserveValue0 = reserveElement0.innerHTML

checkoutElement0 = document.querySelector('#book1 .checkout')
checkoutValue0 = checkoutElement0.innerHTML

checkinElement0 = document.querySelector('#book1 .checkin')
checkinValue0 = checkinElement0.innerHTML

// Print elements and values
console.log(statusElement0)    //
console.log(statusValue0)      // overdue
console.log(STATUS_MAP[statusValue0])
console.log(STATUS_MAP[statusValue0].color)


console.log(reserveElement0)
console.log(reserveValue0)
console.log(STATUS_MAP[statusValue0].canReserve)

// console.log(checkoutElement0)
// console.log(checkoutValue0)

// console.log(checkinElement0)
// console.log(checkinValue0)

// Set element properties/style based on element values
statusElement0.style.color = STATUS_MAP[statusValue0].color
reserveElement0.disabled = !STATUS_MAP[statusValue0].canReserve
checkoutElement0.disabled = !STATUS_MAP[statusValue0].canCheckout
checkinElement0.disabled = !STATUS_MAP[statusValue0].canCheckIn
// checkinElement0.style.color = checkinElement0.disabled ? 'grey' : 'inherit';


// Book 2
statusElement1 = document.querySelector('#book2 .status')
statusValue1 = statusElement1.innerHTML

reserveElement1 = document.querySelector('#book2 .reserve')
reserveValue1 = reserveElement1.innerHTML

checkoutElement1 = document.querySelector('#book2 .checkout')
checkoutValue1 = checkoutElement1.innerHTML

checkinElement1 = document.querySelector('#book2 .checkin')
checkinValue1 = checkinElement1.innerHTML

statusElement1.style.color = STATUS_MAP[statusValue1].color
reserveElement1.disabled = !STATUS_MAP[statusValue1].canReserve
checkoutElement1.disabled = !STATUS_MAP[statusValue1].canCheckout
checkinElement1.disabled = !STATUS_MAP[statusValue1].canCheckIn
// checkinElement1.style.color = checkinElement1.disabled ? 'grey' : 'inherit';
// Book 3 

statusElement2 = document.querySelector('#book3 .status')
statusValue2 = statusElement2.innerHTML

reserveElement2 = document.querySelector('#book3 .reserve')
reserveValue2 = reserveElement2.innerHTML

checkoutElement2 = document.querySelector('#book3 .checkout')
checkoutValue2 = checkoutElement2.innerHTML

checkinElement2 = document.querySelector('#book3 .checkin')
checkinValue2 = checkinElement2.innerHTML

statusElement2.style.color = STATUS_MAP[statusValue2].color
reserveElement2.disabled = !STATUS_MAP[statusValue2].canReserve
checkoutElement2.disabled = !STATUS_MAP[statusValue2].canCheckout
checkinElement2.disabled = !STATUS_MAP[statusValue2].canCheckIn
// checkinElement2.style.color = checkinElement2.disabled ? 'grey' : 'inherit';

checkoutElement0.style.color