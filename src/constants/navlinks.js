import React from 'react'
import { Link } from 'gatsby'

const links = [
    { 
        id: 1,
        text: 'Domov',
        href: '/',
    },
    {
        id: 2,
        text: 'O nás',
        href: '/o-nas',
    },
    {
        id: 3,
        text: 'Členovia',
        href: '/clenovia',
    },
    {
        id: 4,
        text: 'Galéria',
        href: '/galeria',
    },
    {
        id: 5,
        text: 'Kontakt',
        href: '/#kontakt',
    }
]


const navlinks = ({className}) => {
    return (
        <ul 
            className={`nav-links ${className ? className : ''}`}
        >
            { links.map( link => 
                <li key={link.id}>
                    <Link
                        to={link.href}
                        activeClassName="active-link"
                    >
                        {link.text}
                    </Link>
                </li>
            )}
        </ul>
    )
}

export default navlinks
