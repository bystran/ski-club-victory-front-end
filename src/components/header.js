import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Sidebar from "./Sidebar"
import NavBar from './navbar';

import Logo from '../assets/icons/Logo.svg';
import MenuIcon from '../assets/icons/menu_icon.svg';

import '../saas/components/Header.scss';

const Header = ({ siteTitle }) => {
    const [ hidden, setHidden ] = useState(true)
    const handleClick = (e) => {
        if(e.target.nodeName !== 'NAV'){
            setHidden(!hidden)
        }
    }
    return(
      <header className='page-header'>
        
        <div>
          <Link
              to="/"
              className="logo"
          >
              <Logo  /> 
            </Link>
        </div>
        <div className='mobile-menu-icon'
          onClick={handleClick}
          tabIndex="0"
          role="button"
          onKeyPress={handleClick}
        >
          <MenuIcon />
        </div>
        <NavBar />
        
        <Sidebar 
          className={`${hidden ? 'hidden': ''}`}
          handleClick={handleClick}
        /> 
        <div className='header-gradient-border'>

        </div>


      </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
