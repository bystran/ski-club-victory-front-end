import React, {useState} from 'react'
import useFacebookData from '../../hooks/useFacebookData';
import ImageGallery from 'react-image-gallery';
import ReactPlayer from 'react-player'


import "react-image-gallery/styles/css/image-gallery.css";
import "../../saas/components/sections/Gallery.scss";
import Decoration from '../../assets/icons/decoration.svg';
import BlueStripe from '../../assets/icons/rectangle_blue.svg';
import BlueMountainBg from '../BlueMountainBg';



const Gallery = () => {
    const fbData = useFacebookData();
    const [filter, setFilter] = useState("all"); // one of ["all", "photos", "videos"]
    const getImgs = (filterWord) => {
        if(fbData && fbData.media){
            return fbData.media.reduce( (accumulator, media) => {
                if(media.media.source){
                    if(filterWord !== "photos"){
                        return accumulator.concat({
                            renderItem: () => <ReactPlayer
                                stopOnUnmount url={media.media.source}
                                light={media.media.image.src} 
                                playing
                                controls

                            />,
                            thumbnail:media.media.image.src,   
                            original:media.media.image.src,
                            originalClass: "react-video-slide"
                        })
                    }else{
                        return accumulator;
                    }
                }else if(filterWord!== "videos"){
                    return accumulator.concat({
                        original:media.media.image.src,
                        thumbnail:media.media.image.src,     
                    });
                }else {
                    return accumulator;
                }

            }, [])
            
        }
        return [];


    }
    const imgs = getImgs(filter);
    return (
        <>
        <BlueMountainBg className='gallery-section' id='galeria'>
            {/* <BlueStripe className='smaller-svg'/>
            <Decoration className='larger-svg'/> */}
            <h1>Galéria</h1>
            <div className="gallery-header-wrp">
                <ul className="gallery-header">
                    <li 
                        className = {`${filter === "all" ? "active": ""}`}
                        onClick = {()=>setFilter("all")}
                    >
                        Všetky
                    </li>
                    <li 
                        className={`${filter === "photos" ? "active": ""}`}
                        onClick = {()=>setFilter("photos")}
                    >
                        Fotky
                    </li>
                    <li 
                        className={`${filter === "videos" ? "active": ""}`}
                        onClick = {()=>setFilter("videos")}
                    >
                        Videá
                    </li>
                </ul>
            </div>
           
            <div className="gallery-content">                  
                <ImageGallery lazyLoad={true} items={imgs} showPlayButton={false} />
            </div>

            
        </BlueMountainBg>
        <div className="past-images-of-the-week">

        </div>
        </>
    )
}

export default Gallery
