// Using spread syntax to concatenate arrays and string characters
export default function concatArrays(array1, array2, string) {
  // Spread each array and spread the string into individual characters
  return [...array1, ...array2, ...string];
}
