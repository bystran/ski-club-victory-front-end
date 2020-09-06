import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LinkButton from '../LinkButton';
import MemberCard from '../MemberCard';
import NextArrow from '../../assets/icons/next_arrow.svg';
import PrevArrow from '../../assets/icons/prev_arrow.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
import '../../saas/components/sections/Members.scss';
import BlueMtnBg from '../BlueMountainBg';

const query =  graphql`
{
  members:allStrapiClen {
    nodes {
      Meno
      Slug
      Profilova_fotka {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
}
`

const Members = () => {
  const { members:{nodes} } = useStaticQuery(query)
  const settings = {
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    centerMode: true,
    nextArrow:<NextArrow />,
    prevArrow:<PrevArrow />,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
      <BlueMtnBg 
        className='members-section'>

          <h1 className="white">Členovia</h1>
          <div className='member-card-holder'>
              <Slider {...settings}>
                {
                    nodes.map( node => 
                      <MemberCard 
                          image = {node.Profilova_fotka.childImageSharp.fluid} 
                          name = {node.Meno}
                      />
                  )
                }
              </Slider>

          </div>
          <div className='button-row'>
            <LinkButton
                href='/clenovia'
                color="white"
                background="rgba(255,255,255,0.17)"
            > 
                Všetci Členovia
            </LinkButton>
          </div>
      </BlueMtnBg>
  )
}

export default Members