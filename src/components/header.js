//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Sidebar from "./Sidebar"
// import NavBar from './navbar';
// import SocialLinks from '../constants/socialLinks';
// import Logo from '../assets/icons/Logo.svg';
// import PhoneIcon from '../assets/icons/phone_icon.svg';

const Header = ({ siteTitle }) => (
  <header>
    
    {/* <div>
      <Link
          to="/"
      >
          <Logo className="logo" /> 
        </Link>
    </div> */}
    {/* <NavBar />
    <SocialLinks />
    <div className="phone-num">
      <PhoneIcon />
      <span>+421 999 999 999</span>    
    </div> */}
    <Sidebar /> 


  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
