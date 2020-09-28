import React from "react"
import {useStaticQuery, graphql} from 'gatsby';


import Layout from "../components/layout"
import SEO from "../components/seo"
import MemberCard from "../components/MemberCard";

import '../saas/pages/members.scss';

const query = graphql`
query MyQuery {
  page:strapiClenoviaStranka {
    bits:Info {
      Nadpis
      info
      id
    }
  }
  members: allStrapiClen {
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
  const {page:{bits}, members} = useStaticQuery(query);

  return (
    
    <Layout>
      
      <SEO title="Členovia" />

      <div className="members-page">
        <div className="members-header">
        <h1>Členovia Victory</h1>
        <ul className="members-summary">
          <li>
            <h3>
              Počet členov
            </h3>
            <p>
              {members.nodes.length}
            </p>
          </li>
          {
            bits.map( bit => 
              <li key={bit.id}>
                <h3>
                  {bit.Nadpis}
                </h3>
                <p>
                  {bit.info}
                </p>
              </li>
            )
          }
        </ul>

        </div>
        
        <div className='members-part'>
          <div className='members-container'>
            {
              members.nodes.map( node => 
                <MemberCard 
                    key={node.Slug}
                    image = {node.Profilova_fotka.childImageSharp.fluid} 
                    name = {node.Meno}
                    slug={node.Slug}
                />
              )
            }

          </div>
        </div>
      </div>

  

      

    </Layout>
  )
  
}


export default Members
