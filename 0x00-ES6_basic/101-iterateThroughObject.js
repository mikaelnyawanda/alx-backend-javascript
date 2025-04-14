// Function to convert the iterator to a pipe-separated string
export default function iterateThroughObject(reportWithIterator) {
  // Join all employee names with the pipe separator
  return reportWithIterator.join(' | ');
}
