import React from 'react'

import Youtube from '../assets/icons/youtube_icon.svg';
import Facebook from '../assets/icons/fb_icon.svg';
import Instagram from '../assets/icons/instagram_icon.svg'

const links = [
    {
        id: 1,
        icon: <Facebook />,
        href: 'http://facebook.com',
    },
    {
        id: 2,
        icon: <Instagram />,
        href: 'https://instagram.com',
    },
    {
        id: 3,
        icon: <Youtube />,
        href: 'https://youtube.com',
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
