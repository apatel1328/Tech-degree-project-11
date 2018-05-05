import React from 'react';
import Gif from './components/Gif.js';
import Nomatch from './components/Nomatch.js';



export default class Query extends React.Component {

// performSearch on component mount

	componentDidMount(props) {

		this.props.onSearch(this.props.term)

	}

// build individual image urls through interpolation and pass to Gif component

	renderGif = (gif) => <Gif url={"https://farm" + gif.farm + ".staticflickr.com/" + gif.server + "/" + gif.id + "_" + gif.secret + ".jpg"} key={gif.id} /> 

// identify if search yielded a return if not then render Nomatch component

	render(props) {
		if(this.props.gif.length > 0) {

			return (
				
				<div>
					<h2>{this.props.title} Gifs</h2>

					<ul>
						{this.props.gif.map(this.renderGif)}
					</ul>
				</div>
			);

		}

			return (
				
					<Nomatch />

			);
		
	}

}


