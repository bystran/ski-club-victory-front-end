import React from 'react'

import { useStaticQuery, graphql } from "gatsby"

import BackgroundImage from 'gatsby-background-image';

const query = graphql`
    {
        file(name: {eq: "montains-bg"}) {
            name
            img:childImageSharp {
              fluid (maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
    }
`


const BlueMountainBg = (props) => {
    const { file } = useStaticQuery(query);
    const bgImageStack = [
        `linear-gradient(to top, #253d80 0%, rgba(37, 61, 128, 0.99) 33.46%, rgba(42, 69, 139, 0.92) 79.06%, rgba(37, 61, 128, 0.76) 100%)`,
        file.img.fluid,
    ]
    const { className, children } = props; 
    return (
        <BackgroundImage 
            fluid={bgImageStack} 
            className = {` blue-mountains-background ${className}`}
        >
            {children}
        </BackgroundImage>
    )
}

export default BlueMountainBg
