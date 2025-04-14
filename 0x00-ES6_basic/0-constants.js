// Modifying tasks to use const and let instead of var
export function taskFirst() {
  // Using const as the variable won't be reassigned
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  // Using let as the variable will be modified
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
