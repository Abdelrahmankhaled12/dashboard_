import { PRODUCT_API } from "../../utils/api";

export const SendProductAddApi = (data) => {
    console.log(data)
    return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('title', data.name);
        formData.append('description', data.description);
        formData.append('barcode', data.barCode);
        formData.append('discount', data.discount);
        formData.append('price', data.price);
        formData.append('stock', data.stock);
        formData.append('images', JSON.stringify(data.images));
        formData.append('category_id', data.category);

        if (data.size.length > 0) {
            formData.append('sizes', data.size);
        }
        if (data.colors.length > 0) {
            formData.append('colors', JSON.stringify(data.colors));
        }
        formData.append('deadline', data.date);

        fetch(PRODUCT_API, {
            method: 'POST',
            body: formData,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}
