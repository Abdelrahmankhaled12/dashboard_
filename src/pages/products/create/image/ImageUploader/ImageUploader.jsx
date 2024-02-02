import { useState } from 'react';

const ImageUploader = () => {
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
        console.log(files);
    };

    return (
        <div
            className={`drop-zone ${isDragging ? 'drag-over' : ''}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <p>Drag and drop your image here</p>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                    const files = e.target.files;
                    // Handle the selected files (e.g., upload or preview)
                    console.log(files);
                }}
            />
        </div>
    );
};

export default ImageUploader;
