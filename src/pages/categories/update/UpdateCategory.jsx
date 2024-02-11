/* eslint-disable react/prop-types */
import './style.scss'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MDBInput } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import { SendCategoryUpdateApi } from '../CateegoriesApi';
import Swal from 'sweetalert2/dist/sweetalert2.js'

const UpdateCategory = ({ isOpen, closeModal, value , data }) => {

    // storage value input 
    const [categoryName, setCatgeroyName] = useState("");

    useEffect(() => {
        setCatgeroyName(value?.category_name)
    }, [value])

    // Check Error
    const [check, setCheck] = useState(false)

    // User Click Button [ Update Category ] => Send Update Category to Api
    const handleClickButtonForm = (id, name) => {
        // Check New Category is not already Exist => Defualt not exists 
        let checkSendApi = false;
        // Default Not Error
        setCheck(false)
        // Check category exists or not exists ?
        if (name.trim()) {
            data.forEach(element => {
                // category Already Exsit
                if (element.category_name === name) {
                    // Show Error
                    setCheck(true);
                    // Not Send Api
                    checkSendApi = true;
                }
            });
            // Category Not Exists => Send Category To Api 
            if (!checkSendApi) {
                //  Send Category To Api 
                Swal.fire({
                    title: "Are you sure?",
                    text: `The category name will be updated from  ${value.category_name} to ${name}`,
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, Update"
                }).then((result) => {
                    if (result.isConfirmed) {
                        SendCategoryUpdateApi(id, name)
                            .then(responseData => {
                                if (responseData.status === 201) {
                                    Swal.fire({
                                        title: "Added!",
                                        text: `The category name has been updated to ${name}`,
                                        icon: "success"
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            window.location.reload()
                                        }
                                    })
                                }
                            })
                            .catch(error => {
                                console.log(error)
                                setErrorSendApi(true)
                            });
                    }
                });
            }
        }
    }


    return (
        <div className={isOpen ? "addCategory addCategory_active" : "addCategory"}>
            <div className="flex">
                <div style={{ "flex": "1" }} onClick={() => closeModal()}></div>
                <div className="content">
                    <div>
                        <div className="top">
                            <h2>Update Category</h2>
                            <button onClick={() => closeModal()}><FontAwesomeIcon icon={faXmark} /></button>
                        </div>
                        <div className="box">
                            <form action="" onSubmit={(e) => e.preventDefault()}>
                                <MDBInput
                                    label='Category Name'
                                    id='Name'
                                    type='text'
                                    className={categoryName === "" ? "empty" : ""}
                                    onChange={(e) => setCatgeroyName(e.target.value)}
                                    required
                                    value={categoryName}
                                    autoFocus={true}
                                />
                                {check && (
                                    <p className='error'>This category already exists</p>
                                )}
                                <div className="buttons">
                                    <button type="button" onClick={() => { setCatgeroyName(""), setCheck(false) }}>discard</button>
                                    <button type="sumbit" onClick={() => handleClickButtonForm(value.category_id, categoryName)}>update category</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateCategory