// Function to create a report object
export default function createReportObject(employeesList) {
  return {
    // Set allEmployees property to the received employeesList
    allEmployees: {
      ...employeesList
    },
    // Method to count the number of departments
    getNumberOfDepartments(employees) {
      return Object.keys(employees).length;
    }
  };
}
