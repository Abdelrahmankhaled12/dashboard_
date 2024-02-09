import { MDBInput } from 'mdb-react-ui-kit';
import { useState } from 'react';
import './style.scss'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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

    const removeColor = (color) => {
        let filter = colors.filter(ele => ele.name !== color)
        setColor(filter)
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
                    <div className="colorInput">
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
                            <button type='button' onClick={()=>removeColor(color.name)}  ><FontAwesomeIcon icon={faXmark} /></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Colors