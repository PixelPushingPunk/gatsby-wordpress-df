import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import PhotoRow from '../components/row'

import './index.css'

const Layout = props => {

  console.log('props', props)
  const children = props.children;
  const data = props.data;
  const bio = props.data.allWordpressWpMe.edges[0].node.description;
	const username = props.data.allWordpressWpMe.edges[0].node.name;
  const avatar = props.data.allWordpressWpMe.edges[0].node.avatar_urls.wordpress_96;

  const photos = props.data.allWordpressPost.edges;

  const displayPhotos = () => {
    const photoArray = [];
    let photoRow = [];
    let count = 0;
  
    photos.map( photo => {
      if ( photo.node.featured_media ) {
        photoArray.push( photo );
      }
    } );
  
    return (
      photoArray.map( photo => {
        if ( photoRow.length === 3 ) {
          photoRow = [];
        }
  
        photoRow.push( photo );
        count++;
  
        if ( photoRow.length === 3 ) {
          return returnRow( photoRow, count );
        } else if ( photoArray.length - count === 0 ) {
          return returnRow( photoRow, count );	
        }
      } )
    )
  }

  const returnRow = ( photos, count ) => {
    return (
      <PhotoRow photos={ photos } key={ count } />
    )
  }

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
        { displayPhotos() }
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
		allWordpressPost( sort: { fields: [ date ], order: DESC } ) {
			edges {
				node {
					id
					title
					slug
					date( formatString: "/YYYY/MM/DD/" )
					featured_media {
						localFile {
							childImageSharp {
								sizes( maxWidth: 1000 ) {
									...GatsbyImageSharpSizes
								}
							}
						}
					}
				}
			}
		}

  }
`
