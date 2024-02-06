/* eslint-disable react/prop-types */
import { MDBInput } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.scss'

const Size = ({ sizes, setSize }) => {

    const [value, setValue] = useState("");
    const [error, setError] = useState(false);

    const clickButtonAddSize = () => {
        if (value === "")
            return;
        let check = sizes.length === 0 ? true : sizes.filter(ele => ele === value.trim());
        if (check.length > 0)
            setError(true)
        else {
            setSize([...sizes, value])
            setValue("")
            setError(false)
        }
    }

    const removeSize = (size) => {
        let filter = sizes.filter(ele => ele !== size)
        setSize(filter)
    }

    return (
        <div className="div">
            <h2>Size <span>(optional)</span> </h2>
            <div className="form">
                <MDBInput
                    label='Size'
                    id='size'
                    type='text'
                    className={value === "" ? "empty" : ""}
                    onChange={(e) => setValue(e.target.value)}
                    min={1}
                    placeholder='Xxl'
                    value={value}
                />
            </div>
            <button
                type='button'
                onClick={clickButtonAddSize}
                className="styleButton" style={{ marginBottom: "5px", marginLeft: "auto", display: "block" }}
            >Add Size</button>
            {error && (
                <p className='error'>Already exists</p>
            )}
            <div className='sizes'>
                {sizes?.map(size => (
                    <div className="size" key={size}>
                        <p>{size}</p>
                        <button type='button' onClick={() => removeSize(size)}  ><FontAwesomeIcon icon={faXmark} /></button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Size