// Java Script
//moved variable declarations to the top for legibility and edits


//removed quotation marks to ensure its a number variable instead of a string value
const location1 = 'RSA'
let customers = 1;
currency = null
shipping = null
currency = "R"
//changed currency precursor to the appropriate symbol "R" ISO "$"


FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = 0;
//changed NONE_SELECTED from a string to a number value of 0

//Moved order variables prior to operational logic for legibility and edits
shoes = 300 * 1;
toys = 100 * 5;
//changed "-" operator to "="
shirts = 150 * NONE_SELECTED;
//removed quotation marks to ensure that the mathematical operation references the declared NONE_SELECTED variable value of 0
batteries = 35 * 2;
//added "=" operator to declaration
pens = 5 * NONE_SELECTED ;
//removed quotation marks to ensure that the mathematical operation references the declared NONE_SELECTED variable value of 0

if (location1 === "RSA") { 
shipping === 400 && currency === "R" }
//Inserted the appropriate currency symbol/completed the declaration

if (location1 === "NAM"){
    // added brackets to operational statement as well as changed equality operator to strict "==="
shipping === 600  && currency === "$"}
// added curly brackets to compartmentalise the appropriate logic steps in the correct functions/if statements
else {shipping === 800 && currency ==="$"}
// changed "=" operators to absolute values and inserted the correct currency symbol "$"

const orderTotal = shoes + toys + shirts + batteries + pens;

if (orderTotal > 1000 && location1 === "RSA" && customers === 1) {
    shipping = 0;
}else{
        shipping = 400;

    }
	
if (location1 === "NAM" && customers === 1 && orderTotal >60 && currency ==="$") {
		    shipping = 0;
		}
	


if (shipping === 0 && customers !== 1) { console.log(FREE_WARNING) }
// linked the two variables to check within the if statement using the && operators and removing the incorrect brackets. Changed the declaration of !=== to !==

if(location1 === 'NK'){ 
    console.log(BANNED_WARNING); 
}else{ console.log('price: ', currency, orderTotal + shipping)}
