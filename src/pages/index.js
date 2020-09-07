import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

//import all home page sections
import SectionTwo from "../components/sections/domov/section-2";
import SectionOne from "../components/sections/domov/section-1";
import MembersSection from "../components/sections/members";
import HallOfFame from "../components/sections/hall-of-fame";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <SectionOne />
    <SectionTwo />
    <MembersSection />
    <HallOfFame />
    

  </Layout>
)

export default IndexPage
