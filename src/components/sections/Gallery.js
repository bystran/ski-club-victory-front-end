import React from 'react'
import useFacebookData from '../../hooks/useFacebookData';
import ImageGallery from 'react-image-gallery';
import ReactPlayer from 'react-player'


import "react-image-gallery/styles/css/image-gallery.css";
import "../../saas/components/sections/Gallery.scss";
import Decoration from '../../assets/icons/decoration.svg';
import BlueStripe from '../../assets/icons/rectangle_blue.svg';

const Gallery = () => {
    const fbData = useFacebookData();
    const getImgs = () => {
        if(fbData && fbData.media){
            return fbData.media.map( media => {
                if(media.media.source){
                    return {
                        renderItem: () => <ReactPlayer
                            stopOnUnmount url={media.media.source}
                            light={media.media.image.src} 
                            playing muted
                            controls
                        />,
                        thumbnail:media.media.image.src,   
                        original:media.media.image.src,
                    }
                }
                return {
                    original:media.media.image.src,
                    thumbnail:media.media.image.src,     
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
                <ImageGallery lazyLoad={true} items={imgs} showPlayButton={false} />
            </div>

            
        </div>
    )
}

export default Gallery
