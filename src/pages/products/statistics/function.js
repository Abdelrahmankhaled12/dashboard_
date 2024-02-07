import Products from "../Products"

export const TotalProducts = (data) => {
    return data.length
}

export const TotalProductsSold = (data) => {
    let total = data.map(product => product.sold);
    if (total.length === 0) {
        return 0
    }
    return total.reduce((acc, ele) => acc + ele);
}

export const TotalProductsStock = (data) => {
    let total = data.map(product => product.stock);
    if (total.length === 0) {
        return 0
    }
    return total.reduce((acc, ele) => acc + ele);
}