import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image';
import Slick from 'react-slick';
import LinkButton from '../../LinkButton';
import Decoration from '../../../assets/icons/decoration.svg';

import '../../../saas/components/sections/HomeOne.scss';

const query = graphql`
{
    home1: strapiDomovPrvaStranka {
      mainImgs: VelkeObrazky {
        Image {
          img: childImageSharp {
            fluid (maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      h2: nadpisMensi
      h1: nadpisVelky
      sideImg: obrazokPravaStrana {
        img: childImageSharp {
          fluid (maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
`
const slickSettings = {
    dots: false,
    infinite: true,
    arrows:false,
    autoplay:true,
    autoplaySpeed:10000,
    speed: 500,
    fade: true,
    cssEase: 'linear'

}
const applyBlueFilter = (fluidImg) => {
    return [
        `linear-gradient(rgba(91, 151, 255, 0.66) 0%, rgba(91, 151, 255, 0.66) 100%)`,
        fluidImg
    ]
}


const SectinoOne = () => {
    const {home1:{h1, h2, mainImgs, sideImg}, } = useStaticQuery(query);

    

    return (
        <div className='home-section-one'>
            <div className='section-1-left-side'>
                <Decoration className='decoration' />
                <Slick {...slickSettings}>
                    {mainImgs.map(img=>
                            <BackgroundImage
                                fluid={applyBlueFilter(img.Image.img.fluid)}
                                className='slide-bg'
                            >

                            </BackgroundImage>
                        )
                    }
                </Slick>
                <h2 className='white'>{h2}</h2>
                <h1 className='white'>{h1}</h1>
                <LinkButton
                    href='/o-nas'
                >Zistite viac</LinkButton>
                <LinkButton
                    href="/#stan-sa-clenom"
                    background="rgba(37, 61, 128, 0.59)"
                >Staň sa členom</LinkButton>
            </div>
            <BackgroundImage 
                className='section-1-right-side'
                fluid={sideImg.img.fluid}
                style={{
                        backgroundPosition:'initial',
                        backgroundSize:'initial',

                    }
                }
            >
                <h5 className='white'>22</h5>
                <h4 className='white'>rokov</h4>
                <h3 className='white'>Víťazstiev</h3>
                <LinkButton
                    href="/#sien-slavy"
                >
                        Naše úspechy
                </LinkButton>
            </BackgroundImage>
            
        </div>
    )
}

export default SectinoOne
