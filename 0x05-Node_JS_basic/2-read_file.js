const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    // Remove header line
    const students = lines.slice(1);
    const validStudents = students.filter((line) => {
      const fields = line.split(',');
      return fields.length >= 4 && fields.every((field) => field.trim() !== '');
    });

    console.log(`Number of students: ${validStudents.length}`);

    // Group students by field
    const fields = {};
    validStudents.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    // Display results for each field
    Object.keys(fields).forEach((field) => {
      const studentsList = fields[field];
      console.log(`Number of students in ${field}: ${studentsList.length}. List: ${studentsList.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
