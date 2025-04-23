// task_0/js/main.ts

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alice',
  lastName: 'Wambua',
  age: 20,
  location: 'Nairobi'
};

const student2: Student = {
  firstName: 'Brian',
  lastName: 'Otieno',
  age: 22,
  location: 'Kisumu'
};

const studentsList: Student[] = [student1, student2];

// Render a table in vanilla JavaScript
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);

