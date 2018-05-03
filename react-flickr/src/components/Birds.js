import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Gif from './Gif.js';
import APIKey from '../config.js';



export default class Birds extends React.Component {

	constructor(){
		super();
		this.state = {
			birdGifs: [],
		};
	}


	componentDidMount() {

		axios.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + APIKey + "&text=birds&privacy_filter=1&media=photos&per_page=20&format=json&nojsoncallback=1")
		.then(response => {
			this.setState({
				birdGifs: response.data.photos.photo
			})

		})
		.catch(error => {
			console.log('error uploading', error)
		});

	}



	render() {
		
		const birds = this.state.birdGifs;
		let birdImages = birds.map(gif => {
			return <Gif url={"https://farm" + gif.farm + ".staticflickr.com/" + gif.server + "/" + gif.id + "_" + gif.secret + ".jpg"} key={gif.id} />
		});
		console.log(this.state.birdGifs)

		return (
			
			<ul>
				{birdImages}
			</ul>

		);
	}

}


