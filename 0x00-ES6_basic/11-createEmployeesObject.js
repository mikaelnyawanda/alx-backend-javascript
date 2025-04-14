// Function to create an object with department name and employees
export default function createEmployeesObject(departmentName, employees) {
  // Using computed property name to set the key dynamically
  return {
    [departmentName]: employees,
  };
}
