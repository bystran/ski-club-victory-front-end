import React, {useState} from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';    
import '../saas/components/SimpleGallery.scss';

const SimpleImageGallery = (props) => {

    const {images} = props;
    const [ lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [ lightboxImgIndex, setLightboxImgIndex ] = useState(0);


    const enlargeImage = ( index ) => {
        console.log("click");
        setLightboxImgIndex(index);
        setLightboxIsOpen(true);
    }
    console.log(images);
    return (
        <>
            <div className="simple-gallery">
                {
                    images &&
                    images.map( (image, index) => 
                        
                        <img 
                            key={image.id}
                            src={image.src} 
                            alt='Gallery image'
                            onClick = {()=>enlargeImage(index)}  
                        />   
                    )
                }        
            </div>
            {
                lightboxIsOpen &&
                <Lightbox
                    mainSrc = {images[lightboxImgIndex].src}
                    nextSrc = {images[(lightboxImgIndex + 1) % images.length]}
                    prevSrc={images[(lightboxImgIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setLightboxIsOpen(false)}
                    onMovePrevRequest={() => setLightboxImgIndex((lightboxImgIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() =>
                        setLightboxImgIndex((lightboxImgIndex + 1) % images.length)
                    }
            
                />
            }
        </> 
    )
}

export default SimpleImageGallery
