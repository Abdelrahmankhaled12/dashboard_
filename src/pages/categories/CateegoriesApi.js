import { CATEGORY_API } from "../../utils/api";
import Swal from 'sweetalert2/dist/sweetalert2.js'


export const SendCategoryAddApi = (category) => {
    return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('title', category);
        fetch(CATEGORY_API, {
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


export const SendCategoryDeleteApi = (categories) => {
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
                fetch(CATEGORY_API + "/" + ele.category_id, {
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

export const SendCategoryUpdateApi = (id, category) => {

    return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('title', category);
        fetch(CATEGORY_API + "/" + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: category
            })
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
