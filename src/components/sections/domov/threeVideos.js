import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';  
import ReactPlayer from 'react-player'


import '../../../saas/components/sections/HomeThreeVideos.scss';
import LinkButton from '../../LinkButton';
import Decoration from '../../../assets/icons/decoration.svg';
import BlueStripe from '../../../assets/icons/rectangle_blue.svg';


const query = graphql`
  {
    data:strapiDomov3Videa {
      subheading: malyNadpis
      text
      heading: velkyText
      vids: videa {
        video {
          publicURL
        }
        thumbnail {
          img:childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
      }
    }
  }
`



const ThreeVideos = () => {
    const {data: {heading, text, subheading, vids} } = useStaticQuery(query);
    
    return (
        <div className="section-3-videos">
            <BlueStripe className='smaller-svg'/>
            <Decoration className='larger-svg'/>
            
            
            <div className="txt-col">
              <h2>{subheading}</h2>
              <h1>{heading}</h1>
              <p>{text}</p>
              <LinkButton
                href='/#stan-sa-clenom'
              >
                Pridaj sa
              </LinkButton>
            </div>
            <div className="vids-col">
              {
                vids.map( vid => <ReactPlayer className="three-vids-video" 
                  stopOnUnmount url={vid.video.publicURL}
                  light={vid.thumbnail.img.fluid.src} 
                  playing muted
                  controls
                  />)
              }
            </div>
        </div>
    )
}

export default ThreeVideos
