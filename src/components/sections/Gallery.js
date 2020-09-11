import React from 'react'
import useFacebookData from '../../hooks/useFacebookData';
import ImageGallery from 'react-image-gallery';


import "react-image-gallery/styles/css/image-gallery.css";
import "../../saas/components/sections/Gallery.scss";
import Decoration from '../../assets/icons/decoration.svg';
import BlueStripe from '../../assets/icons/rectangle_blue.svg';

const Gallery = () => {
    const fbData = useFacebookData();
    const getImgs = () => {
        if(fbData && fbData.photos){
            return fbData.photos.map( photo => {
                return {
                    original:photo.full_picture,
                    thumbnail:photo.picture      
                }
            })
            
        }
        return [];


    }
    const imgs = getImgs()
    return (
        <div className='gallery-section' id='galeria'>
            <BlueStripe className='smaller-svg'/>
            <Decoration className='larger-svg'/>
            <h1>Galéria</h1>
            <div className="gallery-content">                  
                <ImageGallery lazyLoad={true} items={imgs} />
            </div>

            
        </div>
    )
}

export default Gallery
