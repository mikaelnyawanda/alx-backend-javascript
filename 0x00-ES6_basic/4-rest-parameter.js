// Implementing rest parameter syntax to capture all arguments
export default function returnHowManyArguments(...args) {
  // The rest parameter collects all arguments into an array
  // Return the length of that array
  return args.length;
}
