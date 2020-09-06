import React from 'react'

import BackgroundImage from 'gatsby-background-image';
import '../saas/components/MemberCard.scss';


const MemberCard = (props) => {
    const { image, name} = props;
    const backgroundFluidImageStack = [
        `linear-gradient(rgba(37, 61, 128, 0.23) 10%, rgba(37, 61, 128, 0.32) 50.62%, rgba(0, 0, 0, 0.78) 79.95%, #000 110%)`,
        image,
        
    ]

    return (
        <div className="member-card">
            <BackgroundImage 
                fluid={backgroundFluidImageStack}
                className="member-card-inner"
            >
                <h4>{name.trim().split(' ').slice(-1)[0]}</h4>
                <h3>{name}</h3>
            </BackgroundImage>
        </div>

        
    )
}

export default MemberCard