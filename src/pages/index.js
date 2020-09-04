import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

//import all home page sections
import SectionTwo from "../components/sections/domov/section-2";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SectionTwo />

  </Layout>
)

export default IndexPage
