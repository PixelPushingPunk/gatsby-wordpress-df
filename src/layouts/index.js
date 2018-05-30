import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const Layout = props => {

  const children = props.children;
  const data = props.data;
  const bio = props.data.allWordpressWpMe.edges[0].node.description;
	const username = props.data.allWordpressWpMe.edges[0].node.name;
  const avatar = props.data.allWordpressWpMe.edges[0].node.avatar_urls.wordpress_96;

  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header bio={bio} username={username} src={avatar} siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allWordpressWpMe {
      edges {
        node {
          name
          description
          avatar_urls {
            wordpress_96
          }
        }
      }
    }
  }
`
