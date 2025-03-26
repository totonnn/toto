// Initialize total savings to 0
let totalSavings = 0;
const savingsHistory = [];

// Handle form submission
document.getElementById('savingForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get the savings amount from the input
    const savingsAmount = parseFloat(document.getElementById('savingsAmount').value) || 0;

    // Check if the amount is valid
    if (savingsAmount > 0) {
        // Add to total savings
        totalSavings += savingsAmount;
        document.getElementById('totalSavings').textContent = totalSavings.toFixed(2);

        // Record the savings entry with the current date
        const date = new Date().toLocaleDateString();
        savingsHistory.push({ date, savings: savingsAmount });

        // Clear the input field
        document.getElementById('savingsAmount').value = '';
    }
});

// Handle history button click
document.getElementById('historyButton').addEventListener('click', function () {
    const historySection = document.getElementById('historySection');
    const historyTableBody = document.querySelector('#historyTable tbody');

    // Show the history section
    historySection.classList.toggle('hidden');

    // Clear the existing history table
    historyTableBody.innerHTML = '';

    // Add each history entry to the table
    savingsHistory.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.date}</td>
            <td>$${entry.savings.toFixed(2)}</td>
        `;
        historyTableBody.appendChild(row);
    });
});
