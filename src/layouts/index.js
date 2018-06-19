import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Footer from '../components/footer'

import background from '../static/bg-desktop.jpg'

import './whitebelt.css'
import './index.css'

const Layout = ({ children, data }) => (
  <div className="fx fx-d-c jc-c ai-c h-100">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div className="contain w-100">
      <div
        className="fx fx-d-c jc-c mb-5"
        style={{
          height: 592,
          paddingLeft: 120,
          backgroundColor: `#fff`,
          background: `url(${background}) bottom right no-repeat #F6F6F6`,
          backgroundSize: `auto 100%`,
          boxShadow: `0 0 40px 0 rgba(0,0,0,.24)`
        }}
      >
        {children()}
      </div>
      <Footer />
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
