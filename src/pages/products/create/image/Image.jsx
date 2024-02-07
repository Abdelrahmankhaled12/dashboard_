/* eslint-disable react/prop-types */
import ImageUploader from './ImageUploader/ImageUploader';
import './style.scss'

const Image = ( { images , setImages }) => {

    return (
        <div className='imageInputFile'>
            <div className="div">
                <div className="text">
                    <h2>Media</h2>
                    <p>Add media from URL</p>
                </div>
                <ImageUploader setImageFile={(value) => setImages([...images, value])} />
            </div>
        </div>
    )

}

export default Image