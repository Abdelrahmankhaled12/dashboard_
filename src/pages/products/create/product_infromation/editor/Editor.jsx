/* eslint-disable react/prop-types */
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './style.scss'

const Editor = ( {value_des , setDesValue }) => {
    return (
        <ReactQuill placeholder='Product Description'  theme="snow" value={value_des} onChange={(e)=> setDesValue(e)} />
    )
}

export default Editor