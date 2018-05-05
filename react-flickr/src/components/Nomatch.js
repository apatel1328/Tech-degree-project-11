import React from 'react';


const Nomatch = () =>

// Functional component to be rendered if search does not yield results 

	<ul>
		<li className="not-found">
			<h3>No Results Found</h3>
			<p>You search did not return any results. Please try again.</p>
		</li>
	</ul>


export default Nomatch;