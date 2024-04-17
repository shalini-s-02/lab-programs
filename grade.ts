import * as readline from 'readline';

// Define a type for a student's marks
type Marks = { name: string, marks: number[] };

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to calculate the average mark of a student
function calculateAverageMark(marks: Marks): number {
  const { marks: studentMarks } = marks;
  const totalMarks = studentMarks.reduce((total, mark) => total + mark, 0);
  return totalMarks / studentMarks.length;
}

// Function to calculate the class average mark
function calculateClassAverageMarks(students: Marks[]): number {
  const totalMarks = students.reduce((total, marks) => {
    return total + calculateAverageMark(marks);
  }, 0);
  return totalMarks / students.length;
}

// Function to get user input for student's marks
function getStudentMarks(): Promise<Marks> {
  return new Promise((resolve) => {
    rl.question('Enter student name: ', (name) => {
      const marks: number[] = [];
      const getMark = (i: number) => {
        if (i < 5) {
          rl.question(`Enter mark ${i + 1}: `, (mark) => {
            marks.push(parseFloat(mark));
            getMark(i + 1);
          });
        } else {
          resolve({ name, marks });
        }
      };
      getMark(0);
    });
  });
}

// Get student marks until the user decides to stop
async function getStudentsMarks(): Promise<Marks[]> {
  const studentsMarks: Marks[] = [];
  let continueInput = true;
  while (continueInput) {
    const studentMarks = await getStudentMarks();
    studentsMarks.push(studentMarks);
    const userInput = await new Promise<string>((resolve) => {
      rl.question('Do you want to enter marks for another student? (yes/no): ', resolve);
    });
    continueInput = userInput.toLowerCase() === 'yes';
  }
  return studentsMarks;
}

// Main function to execute the program
async function main() {
  const studentsMarks = await getStudentsMarks();

  // Calculate average mark for each student
  console.log("Average marks for each student:");
  studentsMarks.forEach((studentMarks, index) => {
    console.log(`Student ${index + 1}:`, calculateAverageMark(studentMarks));
  });

  // Calculate class average mark
  console.log("\nClass average mark:", calculateClassAverageMarks(studentsMarks));

  // Close readline interface
  rl.close();
}

// Execute main function
main();
