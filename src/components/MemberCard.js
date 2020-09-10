import React from 'react'

import BackgroundImage from 'gatsby-background-image';
import '../saas/components/MemberCard.scss';
import { Link } from 'gatsby';


const MemberCard = (props) => {
    const { image, name, slug} = props;
    const backgroundFluidImageStack = [
        `linear-gradient(rgba(37, 61, 128, 0.23) 10%, rgba(37, 61, 128, 0.32) 50.62%, rgba(0, 0, 0, 0.78) 79.95%, #000 110%)`,
        image,
        
    ]

    return (
        <Link to={`/clenovia/${slug}`}>
            <div className="member-card">
                <BackgroundImage 
                    fluid={backgroundFluidImageStack}
                    className="member-card-inner"
                >
                    <h4>{name.trim().split(' ').slice(-1)[0]}</h4>
                    <h3>{name}</h3>
                </BackgroundImage>
            </div>
        </Link>


        
    )
}

export default MemberCard