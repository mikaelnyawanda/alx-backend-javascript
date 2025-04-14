// Implementing block scoping to prevent variable overwriting
export default function taskBlock(trueOrFalse) {
  // Using let for block scoping instead of var
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    // These are now new variables in this block scope
    // They don't affect the outer variables with the same names
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}
