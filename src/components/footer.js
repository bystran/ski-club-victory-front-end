import React from 'react'
import Logo from '../assets/icons/Logo.svg';
import { graphql, useStaticQuery } from 'gatsby';
import SocialLinks from '../constants/socialLinks';
import NavLinks from '../constants/navLinks';
import '../saas/components/Footer.scss';

const query = graphql`
{
    contact: strapiKontakt {
      email
      telefon
      people: KontaktnaOsoba {
        id
        meno
        telefon
      }
    }
  }
`

const Footer = () => {
    const {contact:{ email, telefon, people }} = useStaticQuery(query);
    return (
        
        <footer className="page-footer">
            <div className="row-1">
                <Logo className="logo" />
                <SocialLinks />
            </div>
            <nav className='col page-nav'>
                <h3> Lyžiarsky klub </h3>
                <NavLinks />
            </nav>
            <nav className='col page-nav page-nav-2'>
                <h3>Domov</h3>
                <NavLinks />
            </nav>
            <div className='col kontakt-1'>
                <h3>Kontakt</h3>
                <div className="text contact-people">
                        {
                            people.map( person => 
                                <div className="contact-person">
                                    <h3>{person.meno}</h3>
                                    <p>{person.telefon}</p>
                                </div>    
                            )
                        }
                </div>

            </div>
            <div className='col kontakt-2'>
                <h3>&nbsp;</h3>
                <div className="info">
                    <a className="text" href={ `mailto: ${{ email }}` }>
                        { email }
                    </a>
                </div>
                <div className="info">
                    <a className="text" href="https://m.me/skiclubvictory">
                        messenger
                    </a>
                </div>
                <div className="info">
                    <a className="text" href={`https://wa.me/${telefon}`}>
                        whatsapp
                    </a>
                </div>
                
            </div>
            <div className="row-bot">
            © {new Date().getFullYear()}, SKICLUBVICTORY,
            
            built by Adam Bystran
            </div>


        </footer>
    )
}

export default Footer;
