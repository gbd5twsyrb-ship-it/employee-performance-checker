//GREAT'S EMPLOYEE PERFORMANCE CHECKER

// 1. Create an array of employees
const employees = [
    { name: "John", score: 85 },
    { name: "Mary", score: 72 },
    { name: "David", score: 55 },
    { name: "Sarah", score: 45 },
    { name: "Michael", score: 92 }
];

// 2. Create a function to calculate performance
function calculatePerformance(score) {
    if (score >= 80 && score <= 100) {
        return "Excellent";
    } else if (score >= 60) {
        return "Good";
    } else if (score >= 50) {
        return "Average";
    } else {
        return "Needs Improvement";
    }
}

// 3. Display employee performance
function displayEmployees() {
    for (const employee of employees) {
        const performance = calculatePerformance(employee.score);

        console.log("------------------------");
        console.log(`Name: ${employee.name}`);
        console.log(`Score: ${employee.score}`);
        console.log(`Performance: ${performance}`);
    }
}

// 4. Run the program
displayEmployees();