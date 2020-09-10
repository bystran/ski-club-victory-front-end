import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';


// import
import MailIcon from '../../assets/icons/email.svg';
import PhoneIcon from '../../assets/icons/phone_icon.svg';
import MessengerIcon from '../../assets/icons/messenger.svg';
import WhatsAppIcon from '../../assets/icons/whatsapp.svg';
import PlaceIcon from '../../assets/icons/place.svg';
import Decoration from '../../assets/icons/decoration.svg';
import '../../saas/components/sections/Contact.scss';


const query = graphql`
{
    contact: strapiKontakt {
      email
      telefon
      firma:Firma {
        DIC
        ICO
        Mesto
        Nazov
        PSC
        Ulica
      }
      people: KontaktnaOsoba {
        id
        meno
        telefon
      }
      foto {
        img: childImageSharp {
          fluid ( maxWidth: 1000 ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

const Contact = () => {
    const {contact:{firma, email, telefon, people, foto}} = useStaticQuery(query);

    return (
        <div className="contatct-section">
            <BackgroundImage 
                fluid={foto.img.fluid}
                className="img-col"
            >
                <Decoration />

            </BackgroundImage>
            <div className="info-col" id='kontakt'>
                <h1>Kontakt</h1>
                <div className='info'>
                    <PlaceIcon />
                    <address className='company text' >
                        <h3>{firma.Nazov}</h3>
                        <p>{firma.Ulica}</p>
                        <p>{`${firma.PSC} ${firma.Mesto}`}</p>
                        <div className="legal-info">
                            <p>
                                {`ICO: ${firma.ICO}`}
                            </p>
                            <p>
                                {`DIC: ${firma.DIC}`}
                            </p>
                        </div>
                    </address>
                </div>
                <div className="info">
                    <MailIcon />
                    <a className="text" href={ `mailto: ${{ email }}` }>
                        { email }
                    </a>
                </div>
 
                <div className="info">
                    <PhoneIcon />
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
                <div className="info">
                    <MessengerIcon />
                    <a className="text" href="https://m.me/skiclubvictory">
                        messenger
                    </a>
                </div>
                <div className="info">
                    <WhatsAppIcon />
                    <a className="text" href={`https://wa.me/${telefon}`}>
                        whatsapp
                    </a>
                </div>

            </div>
            <div>
                
            </div>
            
        </div>

    )
}

    

export default Contact
