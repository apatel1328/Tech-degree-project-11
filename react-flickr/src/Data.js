import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Gif from './components/Gif.js';
import APIKey from './config.js';



export default class Query extends React.Component {

	constructor(props){
		super();
		this.state = {
			gifs: [],
		};
	}


	componentDidMount(props) {

		axios.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + APIKey + "&text=" + this.props.search + "&privacy_filter=1&media=photos&per_page=20&format=json&nojsoncallback=1")
		.then(response => {
			this.setState({
				gifs: response.data.photos.photo
			})

		})
		.catch(error => {
			console.log('error uploading', error)
		});

	}


	render(props) {
		
		const photos = this.state.gifs;
		let searchPhotos = photos.map(gif => {
			return <Gif url={"https://farm" + gif.farm + ".staticflickr.com/" + gif.server + "/" + gif.id + "_" + gif.secret + ".jpg"} key={gif.id} />
		});
		console.log(photos)

		return (

			<ul>
				{searchPhotos}
			</ul>
			
		);
	}

}


