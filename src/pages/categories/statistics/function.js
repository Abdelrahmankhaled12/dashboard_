export const TotalProducts = (data) => {
    let total = data.map(order => order.num_of_products);
    if (total.length === 0) {
        return 0
    }
    return total.reduce((acc, ele) => acc + ele);
}

export const TotalEarning = (data) => {
    let total = data.map(category => category.earning);
    if (total.length === 0) {
        return 0
    }
    return total.reduce((acc, ele) => acc + ele);
}

export const TotalCategories = (data) => {
    return data.length;
}