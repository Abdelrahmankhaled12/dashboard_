import axios from 'axios';

const KEY = "http://127.0.0.1:8000/";

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






