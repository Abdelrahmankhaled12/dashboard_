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

export const SendCategoryUpdateApi = (category) => {

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
                fetch(DELETE_CATEGORY + "/" + ele.category_id, {
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


export const Update_category = (categories, categoryName) => {
    const data = {
        title: categoryName
    }
    Swal.fire({

        title: "Are you sure?",
        text: `All of the following categories will be deleted`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete them"
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(UPDATE_CATEGORY + categories, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),

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


            Swal.fire({
                title: "Deleted!",
                text: `All the following categories have been deleted successfully`,
                icon: "success"
            }).then((result) => {
            })
        }
    });
}
