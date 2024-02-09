export function calculateMonthlyTotalPrices(data) {
    // Create an object to store monthly totals
    const monthlyTotals = {};

    // Loop through each object in the data array
    data.forEach(item => {
        // Extract month and year from the date
        const date = new Date(item.created_at);
        const monthYear = `${date.getMonth() + 1}-${date.getFullYear()}`;

        // If the monthYear key doesn't exist in monthlyTotals, initialize it to 0
        if (!monthlyTotals[monthYear]) {
            monthlyTotals[monthYear] = 0;
        }

        // Add the price to the corresponding month's total
        monthlyTotals[monthYear] += item.total_price;
    });

    console.log(monthlyTotals)

    // return monthlyTotals;
}