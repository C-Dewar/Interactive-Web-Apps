// Relevant educational concepts:
//-------------------------------------------------
// Math.min & Math.max
// new Date() [constructor]
// .getTime() [Methods on dates]
// .getMonth(),.getDate(), and .getFullYear() [Methods on dates]
// .setHours & .setMinutes [Methods on dates]
// .padStart() & .padEnd [Applied on all Strings]

const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(holidays[futureId]?.name || `ID ${futureId} not created yet`)

const copied = structuredClone(holidays[6])
//alternative: spread operator "...copied"
//console.log(copied);

copied.name = 'X-mas Day',
//changed the name of the copied clone to 'X-mas Day'

console.log(copied.name)

let isEarlier = copied.date.getTime() <= holidays[6].date.getTime()

if (copied.date.getTime() <= holidays[6].date.getTime()){   
        console.log('New date is earlier:', isEarlier)
       
}

if(isEarlier === true){
        console.log(isEarlier)
        console.log('ID change:', holidays[christmas].id != copied.id || copied.id);
        console.log('Name change:', holidays[6].name !== copied.name ? copied.name : holidays[6].name);
        console.log('Date change:', holidays[6].date !== copied.date ? holidays[6].date : copied.date);
}

// const firstHolidayTimestamp = Math.min(holidays.length);
// console.log(holidays.length)


// const lastHolidayTimestamp = Math.floor(Math.max(holidays.length));

const firstHolidayTimestamp = Math.min(
    new Date(holidays[0].date).getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)

const lastHolidayTimestamp = Math.max(
    new Date (holidays[0].date).getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)
const firstDay = new Date(firstHolidayTimestamp).getDate();
console.log(firstDay);
const firstMonth = new Date(firstHolidayTimestamp).getMonth() + 1;
console.log(firstMonth);
const lastDay = new Date(lastHolidayTimestamp).getDate();
console.log(lastDay);
const lastMonth = new Date(lastHolidayTimestamp).getMonth() + 1;
console.log(lastMonth);
if(firstDay < 10){
    firstDay.padStart("0");
}
console.log(`${firstDay}/${firstMonth}/${currentYear}`);   
console.log(`${lastDay}/${lastMonth}/${currentYear}`);



// // Function to generate random number
// function randomNumber(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
 
 
// // console.log("Random Number between 0 and 8: ")
 
// // Function call



// console.log(holidays[randomNumber(0,8)])