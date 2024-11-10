function calculateMacros() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const sex = document.getElementById('sex').value;
    const activity = parseFloat(document.getElementById('activity').value);
    const goal = document.getElementById('goal').value;

    if (isNaN(weight) || isNaN(height) || isNaN(age) || !sex || isNaN(activity) || !goal) {
        alert("Please fill out all fields correctly.");
        return;
    }

    let bmr;
    if (sex === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const maintenanceCalories = bmr * activity;

    let goalCalories;
    if (goal === 'maintain') {
        goalCalories = maintenanceCalories;
    } else if (goal === 'lose') {
        goalCalories = maintenanceCalories - 250; // 500 calories/day deficit
    } else if (goal === 'gain') {
        goalCalories = maintenanceCalories + 250; // 500 calories/day surplus
    }

    const carbsRatio = 0.40;  // 40% carbs
    const proteinRatio = 0.30; // 30% protein
    const fatRatio = 0.30;     // 30% fat

    const carbsCalories = goalCalories * carbsRatio;
    const proteinCalories = goalCalories * proteinRatio;
    const fatCalories = goalCalories * fatRatio;

    const carbsGrams = carbsCalories / 4;
    const proteinGrams = proteinCalories / 4;
    const fatGrams = fatCalories / 9;

    document.getElementById('macroResult').innerHTML = `
        <h3>Your Daily Caloric and Macronutrient Breakdown</h3>
        <table style="color: #c4c4c4;" class="table">
            <thead>
                <tr>
                    <th>Nutrient</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Total Calories</td>
                    <td>${goalCalories.toFixed(2)} kcal</td>
                </tr>
                <tr>
                    <td>Carbohydrates</td>
                    <td>${carbsGrams.toFixed(2)} g</td>
                </tr>
                <tr>
                    <td>Protein</td>
                    <td>${proteinGrams.toFixed(2)} g</td>
                </tr>
                <tr>
                    <td>Fat</td>
                    <td>${fatGrams.toFixed(2)} g</td>
                </tr>
            </tbody>
        </table>
    `;
}
