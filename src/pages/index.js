import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header/header"
import Footer from "../components/sections/footer"
import Author from "../components/sections/author"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <Author />
    <Footer />
  </Layout>
)

export default IndexPage
