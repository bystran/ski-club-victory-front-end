import React from "react";
import { graphql } from 'gatsby';
import BgImg from 'gatsby-background-image'
import BecomeMember from '../components/sections/domov/become-member';

import Members from '../components/sections/members'
import Layout from "../components/layout"
import SEO from "../components/seo"

import '../saas/pages/about.scss';

const About = ({data:{strapiONas:{Nadpis, Nadpis2, Podnadpis, infosky, img, text1, celorocnaPriprava }}}) => {
  
  return (
    <Layout>
      <SEO title="O nás" />
      <div className='about-page'>
        <div className='about-row-1'>
          <div className='text-col'>
            <h2>
              {Podnadpis}
            </h2>
            <h1>
              {Nadpis}
            </h1>
            <p>
              {text1}
            </p>
          </div>
          <BgImg className='img-col' fluid={img.sharp.fluid}>

          </BgImg>

        </div>
        <div className='about-row-2'>
          <h1>
            {Nadpis2}
          </h1>
          <ul>
            {infosky.map(i => <li key={i.id}>
              <h3>
                  {i.Nadpis}
              </h3>
              <p>
                  {i.info}
              </p>
            </li>)}
          </ul>
        </div>
        <div className='about-row-3'>
          <div className='text2-col'>
            <h2>
              {celorocnaPriprava.podnadpis}
            </h2>
            <h1>
                {celorocnaPriprava.nadpis}
            </h1>
            <p>
              {celorocnaPriprava.text}
            </p>
          </div>
          <BgImg fluid={celorocnaPriprava.obrazok1.sharp.fluid} className="img1-col">
              
          </BgImg>
          <BgImg fluid={celorocnaPriprava.obrazok2.sharp.fluid} className="img2-col">
              
          </BgImg>
        </div>
      </div>
      <Members />
      <BecomeMember />
    </Layout>
  )
}


export const query = graphql`
{
  strapiONas {
    Nadpis
    Nadpis2
    Podnadpis
    infosky {
      Nadpis
      id
      info
    }
    img:obrazokPravaStrana {
      sharp:childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
      }
      }
    }
    text1
    celorocnaPriprava {
      nadpis
      podnadpis
      text
      obrazok2 {
        sharp:childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      obrazok1 {
        sharp:childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
}
`

export default About
