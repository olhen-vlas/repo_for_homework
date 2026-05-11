/**
 * Conditional constructs if and if-else if-else in JavaScript.
 */

const score = 85;
const attendance = 90;
const hasExam = true;

console.log(`Student score: ${score}, Attendance: ${attendance}%`);

if (hasExam) {
    console.log("The student must take the exam.");
}

console.log("Evaluation result:");

if (score >= 90 && attendance >= 80) {
    console.log("Grade: Excellent (A)");
} else if (score >= 75 && attendance >= 70) {
    console.log("Grade: Good (B)");
} else if (score >= 60 || attendance >= 95) {
    console.log("Grade: Satisfactory (C)");
} else {
    console.log("Grade: Unsatisfactory. Retake required.");
}

if (score > 50) {
    if (attendance < 50) {
        console.log("Warning: low attendance with a passing score.");
    } else {
        console.log("Admitted to the next course.");
    }
}
