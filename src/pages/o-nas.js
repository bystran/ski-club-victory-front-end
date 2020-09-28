import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Na tejto stránke sa stále pracuje.</h1>
    <Link to="/">Naspäť</Link>
  </Layout>
)

export default About
