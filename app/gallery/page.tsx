import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const GalleryPage = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [currentImage, setCurrentImage] = React.useState(0);

    const images = [
        {'src': 'path_to_before_after1.jpg', 'alt': 'Before and After Transformation 1'},
        {'src': 'path_to_before_after2.jpg', 'alt': 'Before and After Transformation 2'},
        {'src': 'path_to_model1.jpg', 'alt': 'Model with Wig Style 1'},
        {'src': 'path_to_model2.jpg', 'alt': 'Model with Wig Style 2'},
        {'src': 'path_to_mannequin1.jpg', 'alt': 'Mannequin Display 1'},
        {'src': 'path_to_mannequin2.jpg', 'alt': 'Mannequin Display 2'},
    ];

    const openLightbox = (index) => {
        setCurrentImage(index);
        setIsOpen(true);
    };

    return (
        <div className="gallery-page">
            <h1>Professional Portfolio Gallery</h1>
            <div className="categories">
                <h2>Salon Work</h2>
                <div className="gallery">
                    {images.map((image, index) => (
                        <div className="item" key={index} onClick={() => openLightbox(index)}>
                            <img src={image.src} alt={image.alt} style={{filter: 'brightness(80%)'}}/>
                            <p>{image.alt}</p>
                        </div>
                    ))}
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[currentImage].src}
                        onCloseRequest={() => setIsOpen(false)}
                        nextSrc={images[(currentImage + 1) % images.length].src}
                        prevSrc={images[(currentImage + images.length - 1) % images.length].src}
                        onMovePrevRequest={() =>
                            setCurrentImage((currentImage + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            setCurrentImage((currentImage + 1) % images.length)
                        }
                    />
                )}
            </div>
        </div>
    );
};

export default GalleryPage;