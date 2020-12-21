/**
 * @function - to check whether provided array is valid to find the cube root
 * @param {*} arr - array of numbers
 * @returns - true if valid, throws if invalid
 */

const findValidArray = (arr) => {
  try {
    if (Array.isArray(arr)) {
      for (let element in arr) {
        if (isNaN(arr[element]) || arr[element] === null) {
          throw "Array does not have valid Numbers";
        }
      }
      return true;
    } else {
      throw "Not an valid array";
    }
  } catch (error) {
    throw error;
  }
};

/**
 * @function - to find the cuberoot for every element in array
 * @param {*} arr - array of numbers
 * @returns - Cube root object with every element of input array as key and their cube root as value
 */

const arrayCubeRootToJson = (arr) => {
  let isValidArray = findValidArray(arr);
  if (isValidArray) {
    let cubeRootObj = {};
    for (let element in arr) {
      cubeRootObj[arr[element]] = Math.cbrt(arr[element]);
    }
    return cubeRootObj;
  }
};

//export { arrayCubeRootToJson };
module.exports = arrayCubeRootToJson;
