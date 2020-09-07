import React from 'react'
import { Link } from 'gatsby'
import SocialLinks from '../constants/socialLinks';
import Logo from '../assets/icons/Logo.svg';
import PhoneIcon from '../assets/icons/phone_icon.svg';
import Links from '../constants/navlinks';
import NewMemberIcon from '../assets/icons/new_member_icon.svg';
import CloseIcon from '../assets/icons/close_icon.svg';
import '../saas/components/Sidebar.scss';

const Sidebar = ({ className, handleClick}) => {

    const handleKeyToClick = e => {
        if(e.code === 'Esc'){
            handleClick(e);
        }
    }

    return (
        <nav 
            className={`side-bar ${className}`}  
        >   
            <div 
                className='close-button'
                onClick={handleClick}  
                role="button"
                tabIndex="0"
                onKeyPress={handleKeyToClick}
            >
                <CloseIcon />
            </div>
            <Link
                to="/"
                className="logo-side-bar"
            >
                <Logo  /> 
            </Link>
            <Links
            />
            <Link
                to="#stan-sa-clenom"
                className="stan-sa-clenom"
            >
                <NewMemberIcon />
                <span>
                    Stan sa clenom
                </span>
            </Link>
            <SocialLinks />
            <div className="phone-num">
                <PhoneIcon />
                <span>+421 999 999 999</span>    
            </div> 
        </nav>
    )
}

export default Sidebar
