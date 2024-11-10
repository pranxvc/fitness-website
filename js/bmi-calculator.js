function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const age = parseInt(document.getElementById('age').value);
    const sex = document.getElementById('sex').value;

    if (isNaN(weight) || isNaN(height) || isNaN(age) || !sex) {
        alert("Please fill out all fields correctly.");
        return;
    }

    const bmi = weight / (height * height);
    let bmiStatus = "";

    if (bmi < 18.5) {
        bmiStatus = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiStatus = "Healthy";
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiStatus = "Overweight";
    } else {
        bmiStatus = "Obese";
    }

    document.getElementById('result').innerHTML = `Your BMI is ${bmi.toFixed(2)}, which means you are ${bmiStatus}.`;
}
