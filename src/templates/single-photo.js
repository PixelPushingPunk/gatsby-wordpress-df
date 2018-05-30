// External
import React from 'react';
import PropTypes from 'prop-types';

// Internal
import Header from '../components/header';

const SinglePhoto = ( props ) => {
	const bio = props.data.allWordpressWpMe.edges[0].node.description;
	const username = props.data.allWordpressWpMe.edges[0].node.name;
	const avatar = props.data.allWordpressWpMe.edges[0].node.avatar_urls.wordpress_96;

	return (
		<div>
			<Header bio={ bio } src={ avatar } username={ username } />
			<div>hi</div>
		</div>
	)
}

export default SinglePhoto;

SinglePhoto.PropTypes = {
	data: PropTypes.object
}

export const pageQuery = graphql`
	query PhotoQuery {
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