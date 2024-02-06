export const TotalCompletedOrders = ( orders ) => {
    return orders.filter(order => order.status === "completed").length
}

export const TotalPendingOrders = ( orders ) => {
    return orders.filter(order => order.status === "pending").length
}

export const TotalRefundedOrders = ( orders ) => {
    return orders.filter(order => order.status === "refunded").length
}

export const TotalSpendOrders = ( orders ) => {
    let totalSpend = orders.map(order => order.total_price);
    if(totalSpend.length === 0) {
        return 0
    }
    return totalSpend.reduce((acc,ele)=> acc + ele);
}