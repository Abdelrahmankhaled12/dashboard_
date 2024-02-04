/* eslint-disable react/prop-types */
import { useState } from 'react';
import ImageUploader from './ImageUploader/ImageUploader';
import './style.scss'

const Image = () => {

    const [product_image, setProduct_image] = useState("")

    return (
        <div className='imageInputFile'>
            <div className="div">
                <div className="text">
                    <h2>Media</h2>
                    <p>Add media from URL</p>
                </div>
                <ImageUploader setImageFile={(value) => setProduct_image([...product_image, value])} />
            </div>
        </div>
    )

}

export default Image