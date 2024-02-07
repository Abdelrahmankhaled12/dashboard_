import axios from 'axios';

const KEY = "http://127.0.0.1:8000/";

const ADD_PRODUCT = KEY + "api/products"

export const PRODUCT_API = KEY + "api/products";

export const CATEGORY_API = KEY + "api/categories";

export const PROMOCODE_API = KEY + "api/promocodes"




export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(KEY + "api/" + url);
        return data;
    } catch (err) {
        console.log(err);
        return err
    }
}


export const Add_Product = (name, description, barCode, price, discount, date, category, images, colors, size) => {

    const formData = new FormData();
    formData.append('title', name);
    formData.append('description', description);
    formData.append('barcode', barCode);
    formData.append('discount', discount);
    formData.append('price', price);
    formData.append('stock', stock);
    formData.append('images', JSON.stringify(images));
    formData.append('colors', JSON.stringify(colors));
    formData.append('category_id', category);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', ADD_PRODUCT, true);
    xhr.send(formData);
}





export const Delete_product = (product) => {
    const formData = new FormData();
    formData.append('id', product);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', DELTE_PRODUCT, true);
    xhr.send(formData);
}

