export const TotalOrders = (data) => {
    let totalOrders = data.map(order => order.orders_count);
    if (totalOrders.length === 0) {
        return 0
    }
    return totalOrders.reduce((acc, ele) => acc + ele);
}

export const TotalCustomers = (data) => {
    return data.length
}

export const TotalSpendOrders = (data) => {
    let totalSpend = data.map(order => order.total_paid);
    if (totalSpend.length === 0) {
        return 0
    }
    return totalSpend.reduce((acc, ele) => acc + ele);
}