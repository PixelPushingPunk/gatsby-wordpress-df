import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Header = props => {
	const bio = props.bio;
	const username = props.username;
	const src =  props.src

	return (
		<div
			style={ {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexWrap: 'wrap',
				margin: '2em 2em',
			} }
		>
			<span
				style={ {
					flexBasis: '120px',
					height: '96px',
				} }
			>
				<img
					src={ src }
					alt={ `Psychdramatic` }
					style={ {
						marginBottom: 0,
						borderRadius: "50%",
						width: '96px',
					} }
				/>
			</span>
			<span
				style={ {
					flexBasis: '500px',
					flexGrow: 1,
				} }
			>
				<Link
					to='/'
					activeStyle={ {
        				textDecoration: 'none',
        				color: '#000000'	
      				} }
				>
					<h3
						dangerouslySetInnerHTML={ { __html: ( username ) } }
						style={ { marginBottom: '0.2em' } }
					/>
				</Link>
				<p 
					style={ { marginBottom: 0 } }
					dangerouslySetInnerHTML={ { __html: ( bio ) } }
				/>
			</span>
		</div>
	)
}

Header.PropTypes = {
	src: PropTypes.string,
	username: PropTypes.string,
	bio: PropTypes.string,
}

export default Header;