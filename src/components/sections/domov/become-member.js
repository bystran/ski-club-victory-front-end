import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image';

import '../../../saas/components/sections/BecomeMember.scss';
import LinkButton from '../../LinkButton';
import CheckIcon from '../../../assets/icons/check.svg';
import Decoration from '../../../assets/icons/decoration.svg';


const query = graphql`
  {
    page:strapiDomovStanSaViktorakom {
      heading:Nadpis
      text:Text
      obrazok {
        img:childImageSharp {
          fluid (maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      Benefit {
        Benefit
        id
      }
    }
  }
`

const BecomeMember = () => {
    const { page } = useStaticQuery(query);
    return (
        <div className="become-member-section">
            <BackgroundImage 
                fluid={page.obrazok.img.fluid}
                className='left-col'>
                <Decoration />
            </BackgroundImage>
            <div className='right-col'>
                <div className='right-col-content'>
                <h1>{ page.heading }</h1>
                <p> { page.text }</p>
                <div className='benefits'>
                    
                    
                        { page.Benefit.map( b => 
                            <div className='benefit'>
                                <CheckIcon />
                                <span>
                                { b.Benefit }
                                </span>
                                
                            </div> 
                            
                        )}
                    
                    
                </div>
                <LinkButton
                    href="/#kontakt"
                >
                    Zavolajte nám
                </LinkButton>
                </div>

            </div>
        </div>
    )
}

export default BecomeMember
