function calculateTripCost() {
    // Get input values
    var fuelPrice = parseFloat(document.getElementById("fuelPrice").value);
    var fuelEconomy = parseFloat(document.getElementById("fuelEconomy").value);
    var distance = parseFloat(document.getElementById("distance").value);

    // Check if inputs are valid numbers
    if (isNaN(fuelPrice) || isNaN(fuelEconomy) || isNaN(distance)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    // Calculate total cost
    var totalCost = (distance / fuelEconomy) * fuelPrice;
    var costPerMile = totalCost / distance;
    var gallonsNeeded = distance / fuelEconomy;

    // Display results
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <h2>Trip Cost Calculation</h2>
        <p>Total Cost: $${totalCost.toFixed(2)}</p>
        <p>Cost per Mile: $${costPerMile.toFixed(2)}</p>
        <p>Gallons Needed: ${gallonsNeeded.toFixed(2)} gallons</p>
    `;
}
