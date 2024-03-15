// scripts.js

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 


/**
 * 
 * @param {number} length - The length of the array that is being created
 * @returns {Array} An array of number values
 */

const createArray = (length) => {
    const result = [];

    for (let i = 0 ; i < length; i++) {
       result.push(i);
    }

    return result;
};

/**
 * 
 * @returns {Array} An array of objects which contains the week and day properties
 * 
 */

const createData = () => {
    const current = new Date();
    current.setDate(1);
    const startDay = current.getDay();
    const daysInMonth = getDaysInMonth(current);


    const weeks = createArray(6);
    /**
     * Array of 6 weeks created instead of an array of 5 weeks to account for the very 
     * rare occurence of potentially having the 1st of the month fall on either a Friday or a Saturday within a 31 day month.
     * When that occurs, the last day or two of the month (for 30/31 day months respectively) will be ommited from the resulting
     * array being created of the month.
     */
    const days = createArray(7);
    const result = [];
  

    for ( const weekIndex of weeks) {
        result.push({
            week: weekIndex +1,
            days: [],
        });

        
    for (const dayIndex of days) {
        const day = (weekIndex * 7) + dayIndex - startDay + 1;
        const isValid = day > 0 && day <= daysInMonth;
        
        result[weekIndex].days.push({
            dayOfWeek: dayIndex +1,
            value: isValid ? day : '',
        });
    }
}
           

    return result;
}


console.log(createData());
/**
 * 
 * @param {string} existing - The existing HTML String
 * @param {string} classString - The classString with which to target the td cell
 * @param {number} value - The value with which to update/display in the td cell
 * @returns {string} - The updated HTML string combined with the td cell
 */


const addCell = (existing, classString, value) => {
    const result = /* html */ `
    ${existing}

    <td class="${classString}">
    &nbsp;${value}&nbsp;
</td>

    `;

    return result;
};

/**
 * 
 * @type {Array}
 *
 */

const createHtml = (data) => {

    let result = "";
  
   

        for (const { week, days} of data) {
        
            let inner = "";
            inner = addCell(inner, "table__cell table__cell_sidebar", `[Week ${week}]`);
            
            for(const {dayOfWeek, value} of days){
                const isToday = new Date().getDate() === value;
                const isWeekend = dayOfWeek === 1 || dayOfWeek === 7;
                const isAlternate = week % 2 === 0;

                let classString = "table__cell";
                if(isToday) classString = `${classString} table__cell_today`;
                if(isWeekend) classString = `${classString} table__cell_weekend`;
                if(isAlternate) classString = `${classString} table__cell_alternate`;
                inner = addCell(inner, classString, value);
            }
            result =  `
            ${result}
            <tr>${inner}<tr>
            `;
        }
        return result;
    }
// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)