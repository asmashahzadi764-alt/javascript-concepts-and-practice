// Variables
const studentName = "Asma";
const age = 20;
const city = "Multan";
const cgpa = 3.4;

// typeof
console.log(typeof studentName);
console.log(typeof age);
console.log(typeof city);
console.log(typeof cgpa);

// if / else
if (age >= 18) {
    console.log("Eligible by Age");
} else {
    console.log("Not Eligible");
}

// &&
if (age >= 18 && cgpa >= 3.0) {
    console.log("Eligible for Scholarship");
} else {
    console.log("Scholarship Not Available");
}

// ||
if (city === "Multan" || city === "Lahore") {
    console.log("Punjab Student");
} else {
    console.log("Other City");
}