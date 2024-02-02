/* eslint-disable react/prop-types */
import './style.scss'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MDBInput } from 'mdb-react-ui-kit';
import { useState , useEffect  } from 'react';

const UpdateCategory = ({ isOpen, closeModal , value }) => {


    const [categoryName, setCatgeroyName] = useState("");

    useEffect(()=> {
        setCatgeroyName(value?.category_name)
    },[value])

    return (
        <div className={isOpen ? "addCategory addCategory_active" : "addCategory"}>
            <div className="flex">
                <div style={{ "flex": "1" }} onClick={() => closeModal()}></div>
                <div className="content">
                    <div>
                        <div className="top">
                            <h2>Add Category</h2>
                            <button onClick={() => closeModal()}><FontAwesomeIcon icon={faXmark} /></button>
                        </div>
                        <div className="box">
                            <form action="">
                                <MDBInput
                                    label='Category Name'
                                    id='Category Name'
                                    type='text'
                                    className={categoryName === "" ? "empty" : ""}
                                    onChange={(e) => setCatgeroyName(e.target.value)}
                                    required
                                    value={categoryName}
                                    autoFocus={true}
                                />
                                <div className="buttons">
                                    <button type="button">discard</button>
                                    <button type="sumbit">update category</button>
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