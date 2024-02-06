import { MDBInput } from 'mdb-react-ui-kit';
import { useState } from 'react';
import './style.scss'
const Colors = ({ colors, setColor }) => {

    const [colorName, setColorName] = useState("");
    const [colorValue, setColorValue] = useState("")

    const clickButtonAddColor = () => {
        if (colorName === "" || colorValue === "")
            return;
        setColor([...colors, { name: colorName, value: colorValue }])
        setColorValue("")
        setColorName("")
    }


    return (
        <div>
            <div className="div">
                <h2>Colors <span>(optional)</span> </h2>
                <div className='colorAdd'>
                    <MDBInput
                        label='Color Name'
                        id='ColorName'
                        type='text'
                        className={colorName === "" ? "empty" : ""}
                        onChange={(e) => setColorName(e.target.value)}
                        value={colorName}
                    />
                    <div className="color">
                        <input type="color" id='color' onChange={(e) => setColorValue(e.target.value)} />
                    </div>
                </div>
                <button
                    type="button"
                    onClick={clickButtonAddColor}
                    className="styleButton" style={{ marginBottom: "5px", marginLeft: "auto", display: "block" }}
                >add color</button>
                <div className='colors'>
                    {colors?.map(color => (
                        <div className="color" key={color.name}>
                            <p>{color.name}</p>
                            {/* <button type='button' onClick={() => removeSize(size)}  ><FontAwesomeIcon icon={faXmark} /></button> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Colors