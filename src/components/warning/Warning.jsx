/* eslint-disable react/prop-types */
import './style.scss'

const Warning = ({ text , isOpen , closeModel , remove }) => {
    return (
        <div className='warning' style={isOpen ? {"opacity" : "1" , "zIndex" : "1000"} : {"opacity" : "0" , "zIndex" : "-1"}}>
            <div className="content">
                <p>{text}</p>
                <div className="buttons">
                    <button className='cancel' onClick={()=> closeModel()}>Cancel</button>
                    <button className='sure'  onClick={()=> remove()}>Sure</button>
                </div>
            </div>
        </div>
    )
}

export default Warning