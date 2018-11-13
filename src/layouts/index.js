import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import Header from '../components/header'
import { Container } from 'semantic-ui-react'
import LandingPage from '../components/landing'
import Contact from '../components/contact'
import Process from '../components/process'
import HowVideo from '../components/howVideo'
import Footer from '../components/footer'
import icon from '../../public/favicon.png'
import Employment from '../components/employment'

const Layout = ({  data }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Lockhart Geophysical</title>
      <link rel="icon" href={icon} />
      <link
        href="https://fonts.googleapis.com/css?family=Play|Russo+One"
        rel="stylesheet"
      />
    </Helmet>
    <Header />
    <LandingPage />
    <Process />
    <HowVideo />
    <Employment />
    <Contact />
    <Footer />

    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        paddingTop: 0,
      }}
    >
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
