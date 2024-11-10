function calculateCalories() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const sex = document.getElementById('sex').value;
    const activity = parseFloat(document.getElementById('activity').value);

    if (isNaN(weight) || isNaN(height) || isNaN(age) || !sex || isNaN(activity)) {
        alert("Please fill out all fields correctly.");
        return;
    }

    let bmr;
    if (sex === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const calories = bmr * activity;

    // document.getElementById('caloriesResult').innerHTML = `Your daily caloric need is ${calories.toFixed(2)} calories.`;

    // Calculate calories for weight loss and weight gain
    const weightLossCalories = calories - 500; // Roughly 0.45 kg (1 lb) per week
    const weightGainCalories = calories + 500; // Roughly 0.45 kg (1 lb) per week

    document.getElementById('calorieTable').innerHTML = `
        <h3>Caloric Needs for Weight Change</h3>
        <table style="color: #c4c4c4;" class="table">
            <thead>
                <tr>
                    <th>Goal</th>
                    <th>Calories per Day</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Maintain weight</td>
                    <td>${calories.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Lose 0.45 kg (1 lb) per week</td>
                    <td>${weightLossCalories.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Gain 0.45 kg (1 lb) per week</td>
                    <td>${weightGainCalories.toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
    `;
}
