import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


const KEY = "http://127.0.0.1:8000/";

const BASE_URL = "http://127.0.0.1:8000/api/";

const ADD_PRODUCT = KEY + "api/products"

const ADD_CATEGORY = 'http://127.0.0.1:8000/api/categories';

const DELETE_CATEGORY = 'api/categories/';


const DELTE_PRODUCT = `http://127.0.0.1:8000/api/admin/delete_product`;


const DELETE_PROMOCODE = KEY + "api/promocodes/"


const ADD_OFFERS = 'http://127.0.0.1:8000/api/promocodes';



export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(BASE_URL + url);
        return data;
    } catch (err) {
        console.log(err);
        return err
    }
}


export const Add_Product = (name, description, barcode , priceOld, priceNew, stock, category, image, colors) => {
    console.log(image)
    console.log(colors)

    const formData = new FormData();
    formData.append('title', name);
    formData.append('description', description);
    formData.append('barcode', barcode);
    formData.append('discount', priceNew);
    formData.append('price', priceOld);
    formData.append('stock', stock);
    formData.append('images', JSON.stringify(image));
    formData.append('colors', JSON.stringify(colors));
    formData.append('category_id', category);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', ADD_PRODUCT, true);
    xhr.send(formData);
}


export const Add_categoryAPi = (category) => {

    Swal.fire({
        title: "Are you sure?",
        text: `A new category will be added called ${category}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Add it!"
    }).then((result) => {
        if (result.isConfirmed) {
            const formData = new FormData();
            formData.append('title', category);
            const xhr = new XMLHttpRequest();
            xhr.open('POST', ADD_CATEGORY, true);
            xhr.send(formData);
            Swal.fire({
                title: "Added!",
                text: `A new category called ${category} has been added.`,
                icon: "success"
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload()
                }
            });
        }
    });

}


export const Delete_category = (categories) => {

    Swal.fire({
        title: "Are you sure?",
        text: `All of the following categories will be deleted ${categories.map(ele => ele.category_name).join(" | ")}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete them"
    }).then((result) => {
        if (result.isConfirmed) {
            categories.map(ele => {
                fetch(DELETE_CATEGORY + ele.category_id, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        // Add any other headers if needed
                    },
                    // You can include a request body if required
                    // body: JSON.stringify(data),
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        // Handle success
                        console.log('Delete successful:', data);
                    })
                    .catch(error => {
                        // Handle error
                        console.error('Error deleting category:', error);
                    });
            })

            Swal.fire({
                title: "Deleted!",
                text: `All the following categories have been deleted successfully : ${categories.map(ele => ele.category_name).join(" | ")}`,
                icon: "success"
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                }
            })
        }
    });
}


export const DeletePromoCode = (promoCode) => {

    Swal.fire({
        title: "Are you sure?",
        text: `All of the following categories will be deleted ${promoCode.map(ele => ele.promocode).join(" | ")}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete them"
    }).then((result) => {
        if (result.isConfirmed) {
            promoCode.map(ele => {
                fetch(DELETE_PROMOCODE + ele.id, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        // Handle success
                        console.log('Delete successful:', data);
                    })
                    .catch(error => {
                        // Handle error
                        console.error('Error deleting category:', error);
                    });
            })
            
            Swal.fire({
                title: "Deleted!",
                text: `All the following categories have been deleted successfully : ${promoCode.map(ele => ele.promocode).join(" | ")}`,
                icon: "success"
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                }
            })
        }
    });
}

export const Delete_product = (product) => {
    const formData = new FormData();
    formData.append('id', product);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', DELTE_PRODUCT, true);
    xhr.send(formData);
}



export const makeOrder = (data) => {
    var jsonData = JSON.stringify(data);
    fetch('http://127.0.0.1:8000/api/user/make_order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${data.token}`
        },
        body: jsonData
    }).then(response => response.json())
        .then(data => {
            if (data.status) {
                console.log(data.status)
            }
        })
        .catch(error => {
            console.log(error);
        });
}


export const addPromoCode = (promoCode, discount, startDate, endDate) => {
    return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('promocode', promoCode);
        formData.append('started_at', startDate);
        formData.append('expired_at', endDate);
        formData.append('discount', discount);

        fetch(ADD_OFFERS, {
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
};

export const login_admin = async (email, password) => {
    const formData = new FormData();
    formData.append('email', email)
    formData.append('password', password)
    try {
        const { data } = await axios.post("http://127.0.0.1:8000/api/admin/login", formData);
        return data;
    } catch (err) {
        return err
    }
}