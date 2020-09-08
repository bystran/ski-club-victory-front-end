import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

//import all home page sections
import SectionTwo from "../components/sections/domov/section-2";
import SectionOne from "../components/sections/domov/section-1";
import MembersSection from "../components/sections/members";
import HallOfFame from "../components/sections/hall-of-fame";
import BecomeMember from "../components/sections/domov/become-member.js"
import ContactSection from "../components/sections/contact"
import ThreeVideos from "../components/sections/domov/threeVideos";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    
    <SectionOne />
    <SectionTwo />
    <MembersSection />
    <ThreeVideos />
    <HallOfFame />
    <BecomeMember />
    <ContactSection />
    
    
   
    

  </Layout>
)

export default IndexPage
