const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

function containsOnlyNumbers(phoneNumber) {
    const isValidString =
      /^[0-9]{0,10}$/.test(phoneNumber) && typeof phoneNumber === "string";
    // returns true or false depending on phoneNumber is a 'string' and doesn't contain letters != 0 to 9.
    return isValidString;
  }
  

const primaryValid = containsOnlyNumbers(primaryPhone);
const secondaryValid = containsOnlyNumbers(secondaryPhone);

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )