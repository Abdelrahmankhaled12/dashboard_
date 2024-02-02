import { MDBInput } from 'mdb-react-ui-kit';
import { useState } from 'react';
import './style.scss'
const Colors = () => {

    const [colorName, setColorName] = useState("");

    return (
        <div>
            <div className="grid">
                <div className="div">
                    <h2>Colors</h2>
                    <div className='colorAdd'>
                        <MDBInput
                            label='Color Name'
                            id='ColorName'
                            type='text'
                            className={colorName === "" ? "empty" : ""}
                            onChange={(e) => setColorName(e.target.value)}
                        />
                        <input type="color" id='color' />
                    </div>
                    <button type="button" className="styleButton">add color</button>
                </div>
                <div className="div">
                </div>
            </div>
        </div>
    )
}

export default Colors