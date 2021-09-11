import React from 'react';
import '../styles.css';

const ImageGalleryItem = ({ src, alt, largeImage, onImageClick }) => {
    return (
        <li className="ImageGalleryItem">
            <img
                src={src}
                alt={alt}
                width="300"
                height="300"
                onClick={() => onImageClick(largeImage)}
                className="ImageGalleryItem-image"
            />
        </li>
    );
};

export default ImageGalleryItem;
