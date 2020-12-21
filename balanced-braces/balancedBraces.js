/**
 * @function - to validate whether the input is an valid string
 * @param {*} input string
 * @returns 
 */

const validateInput = (input) => {
  let isValid = typeof input == "string";
  return isValid;
};

/**
 * @function - to validate the braces match and whether it is properly aligned
 * @param {*} input - String
 * @returns - True is the braces are proper and false if the braces are not proper/missing.
 */

function balancedBraces(input) {
  const OPENING_BRACES = ["{", "[", "(",];
  const CLOSING_BRACES = ["}", "]",  ")"];
  let holdingBraces = [];

  let isValidInput = validateInput(input);

  if (isValidInput) {
    for (let i = 0; i < input.length; i++) {
        let openingBraceIndex = OPENING_BRACES.indexOf(input.charAt(i));
        let closingBracesIndex = CLOSING_BRACES.indexOf(input.charAt(i));

        if(openingBraceIndex >= 0){
              holdingBraces.push(OPENING_BRACES[openingBraceIndex])
        }else if(closingBracesIndex >= 0){
            if(holdingBraces.length < 1){
                  return false;
            }
            if(OPENING_BRACES[closingBracesIndex] == holdingBraces[holdingBraces.length-1]){
                  holdingBraces.pop();
            }else {
              return false;
            }
        }

  }
  if(holdingBraces.length){
    return false;
  }

  return true;
} else {
  return false;
}
}

/* export {
  balancedBraces,
};
 */

module.exports = balancedBraces;
