import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlueBG from '../components/BlueMountainBg'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <BlueBG>
      <div style={{
        minHeight:'50vh',
        textAlign:'center',
        paddingTop:'10vh',
      }}>
        <h1 className='white'>404</h1>
        <h2 className='white'>Zrejme ste zablúdili.</h2>
      </div>
      
    </BlueBG>

  </Layout>
)

export default NotFoundPage
