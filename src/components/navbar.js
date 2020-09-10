import React from 'react';
import { Link } from 'gatsby';
import Links from '../constants/navlinks'; 
import SocialLinks from '../constants/socialLinks';
import PhoneIcon from '../assets/icons/phone_icon.svg';
import NewMemberIcon from '../assets/icons/new_member_icon.svg';
import '../saas/components/Navbar.scss';

const navbar = () => {
    return (
        <div className="nav-bar">
            <div className="top-nav-bar">
                <div>
                    <span>Sledujte nás:</span>
                        <SocialLinks />
                </div>
                
                <div className="phone-num">
                    <PhoneIcon />
                    <span>+421 903 759 842</span>    
                </div>
            </div>
            <nav className='bottom-nav-bar'>
                <Links />
                <Link
                    to="#stan-sa-clenom"
                    className="stan-sa-clenom"
                >
                    <NewMemberIcon />
                    <span>
                        Staň sa členom
                    </span>
                </Link>
            </nav>

        </div>

    )
}



export default navbar;
