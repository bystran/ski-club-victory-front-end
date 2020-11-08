import React from 'react'

import Facebook from '../assets/icons/fb_icon.svg';
import Instagram from '../assets/icons/instagram_icon.svg'

const links = [
    {
        id: 1,
        icon: <Facebook />,
        href: 'http://facebook.com/skiclubvictory',
    },
    {
        id: 2,
        icon: <Instagram />,
        href: 'https://instagram.com/skiclubvictory',
    },
] 

const socialLinks = () => {
    return (
        <ul className='social-links'>
            { 
                links.map( link => 
                    <li key={ link.id }>
                        <a
                            href={ link.href}
                        >
                            {link.icon}
                        </a>
                    </li>    
                )
            }
        </ul>

    )
}

export default socialLinks
