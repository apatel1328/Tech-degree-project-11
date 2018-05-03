import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Navigation = (props) =>

	<nav className="main-nav">
		<ul>
			<li><a href='/cats'>Cats</a></li>
			<li><a href='/dogs'>Dogs</a></li>
			<li><a href='/birds'>Birds</a></li>
			<li><a href='/search'>Search</a></li>
		</ul>
	</nav>


export default Navigation;