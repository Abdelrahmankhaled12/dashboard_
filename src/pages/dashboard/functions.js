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

// This function takes an array of transaction data as input and calculates the total price of transactions.
export function TransactionsPrice(data) {
    // Initialize an array to store the total prices of transactions.
    let totalPrice = [];

    // Extract the total price of each transaction from the provided data array.
    totalPrice = data?.data.map(item => item.total_price);

    // If there are no transactions, return 0.
    if (totalPrice.length === 0) {
        return 0;
    }

    // Calculate the total price by summing up all the individual prices.
    let price = totalPrice?.reduce((acc, ele) => acc + ele);

    // If the total price is less than 1000, return the total price as is.
    // Otherwise, return the total price in thousands with one decimal place.
    if (price < 1000) {
        return price;
    } else {
        return (price / 1000).toFixed(1) + "K";
    }
}


// This function calculates the revenue based on completed transactions from the provided data.
export function RevenuePrice(data) {
    // Initialize an array to store the total prices of completed transactions.
    let totalPrice = [];

    // Filter the data to include only completed transactions.
    totalPrice = data?.data.filter(item => item.status === "completed");

    // Extract the total price of each completed transaction.
    totalPrice = totalPrice?.map(item => item.total_price);

    // If there are no completed transactions, return 0.
    if (totalPrice.length === 0) {
        return 0;
    }

    // Calculate the total revenue by summing up the prices of completed transactions.
    let price = totalPrice?.reduce((acc, ele) => acc + ele);

    // If the total revenue is less than 1000, return it as is.
    // Otherwise, return the total revenue in thousands with one decimal place.
    if (price < 1000) {
        return price;
    } else {
        return (price / 1000).toFixed(1) + "K";
    }
}
