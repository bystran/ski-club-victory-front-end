import React from 'react'
import {graphql} from 'gatsby'
import moment from 'moment/min/moment-with-locales';
import Layout from '../components/layout';
import BlueMtBG from '../components/BlueMountainBg';
import MemberCard from '../components/MemberCard';
import Gallery from 'react-image-gallery';

import '../saas/pages/member.scss';

moment.locale("sk");

const MemberTemplate = ({data:{strapiClen:{name, about, bits, gallery, profile, Slug, birth_date}}}) => {

    


    return (
        <Layout>
            <div className='member-page'>
            <BlueMtBG
                className="member-top"
            >
                <div className="left-col-member">
                    <h1>{name}</h1>
                    <ul className="facts">
                        <li>
                            <h3>Vek</h3>
                            <p>{`${moment().diff(birth_date, 'years', false)} r.`}</p> 
                        </li>
                        {
                            bits.map( fact =>
                                <li key={fact.id}>
                                    <h3>{fact.heading}</h3>
                                    <p>{fact.info}</p>
                                </li>
                            )
                        }
                    </ul>
                    <p className='mem-about'>
                        {about}
                    </p>
                </div>
                <div className="right-col-member">
                    <MemberCard 
                        image={profile.img.fluid}
                        name={name}
                        slug={Slug}
                    />

                </div>
            </BlueMtBG>
            {
                gallery && gallery.length > 0 &&
                (
                    <div className="member-gallery">

                    <h1>Galéria</h1>
                    <Gallery 
                      className="gallery"
                      lazyLoad={true}
                      items={gallery.map(item=>{
                        return {
                          original: `${process.env.GATSBY_BACKEND_SERVER}${item.url}`,
                          thumbnail: `${process.env.GATSBY_BACKEND_SERVER}${item.url}`,
                        }
                      })}
                    />
            </div>
                )
            }
           
            
            </div>
           
        </Layout>

    )
}

export const query = graphql`
    query GetSingleMember($slug: String) {
        strapiClen(Slug: {eq: $slug}) {
        name: Meno
        birth_date
        about: OMne
        bits: Infoska {
            heading: Nadpis
            id
            info
        }
        gallery: Galeria {
            url
            formats {
            thumbnail {
                publicURL
            }
            }
            ext
            mime
        }
        profile: Profilova_fotka {
            img: childImageSharp {
            fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_withWebp
            }
            }
        }
        Slug
        }
    }
`

export default MemberTemplate
