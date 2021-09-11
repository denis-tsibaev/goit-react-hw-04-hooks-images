import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import '../styles.css';

const ImageGallery = ({ hits, onImageClick }) => {
    return (
        <ul className="ImageGallery">
            {hits.map(hit => (
                <ImageGalleryItem
                    key={hit.id}
                    src={hit.webformatURL}
                    alt={hit.tags}
                    largeImage={hit.largeImageURL}
                    onImageClick={onImageClick}
                />
            ))}
        </ul>
    );
};

export default ImageGallery;
