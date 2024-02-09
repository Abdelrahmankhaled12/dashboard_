/* eslint-disable react/prop-types */
import { useState } from 'react';
import './style.scss'
import Cards from './cardImages/Cards';

const ImageUploader = ({ setImageFile }) => {

    const [cards, setCards] = useState([])


    const [isDragging, setIsDragging] = useState(false);

    const handleDragEnter = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        const files = e.dataTransfer.files;
        // Handle the dropped files (e.g., upload or preview)
        handleFileChange(files)
    };


    const handleFileChange = (files) => {
        const fileSizeKB = files[0].size / 1024


        // Make sure files were selected
        if (files.length > 0) {
            const reader = new FileReader();
            reader.onload = function (e) {
                setImageFile(e.target.result.split(",")[1])

                // Update state inside the onload function
                setCards((prevCards) => [
                    ...prevCards,
                    {
                        id: prevCards.length + 1,
                        img: e.target.result, // Set img with the loaded data
                        name: files[0].name,
                        size: fileSizeKB.toFixed(2)
                    },
                ]);
            };
            // Read the first selected image file as a data URL
            reader.readAsDataURL(files[0]);
        }
    };

    return (
        <div
            className={`drop-zone ${cards.length === 0 ? "uploadImage_content" : "uploadImage_cards"} ${isDragging ? 'drag-over' : ''}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            {
                cards.length === 0 ? (
                    <div className='content'
                        onClick={() => document.getElementById("imgInput").click()}
                    >
                        <p>Drag and drop your image here</p>
                        <span>Or</span>
                        <button type='button'>Browse image</button>
                    </div>
                ) : (
                    <>
                        <div className="images">
                            <Cards cards={cards} setCards={value => setCards(value)} />
                        </div>
                        <div
                            className="" style={{ flex: "1" }}
                            onClick={() => document.getElementById("imgInput").click()}
                        >
                        </div>
                    </>

                )
            }
            <input
                type="file"
                accept="image/*"
                onChange={(e)=> handleFileChange(e.target.files)}
                id='imgInput'
            />
        </div >
    );
};

export default ImageUploader;
