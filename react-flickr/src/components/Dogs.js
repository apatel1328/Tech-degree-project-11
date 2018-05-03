import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Gif from './Gif.js';
import APIKey from '../config.js';



export default class Dogs extends React.Component {

	constructor(){
		super();
		this.state = {
			dogGifs: [],
		};
	}


	componentDidMount() {

		axios.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + APIKey + "&text=dogs&privacy_filter=1&media=photos&per_page=20&format=json&nojsoncallback=1")
		.then(response => {
			this.setState({
				dogGifs: response.data.photos.photo
			})

		})
		.catch(error => {
			console.log('error uploading', error)
		});

	}


	render() {
		
		const dogs = this.state.dogGifs;
		let dogImages = dogs.map(gif => {
			return <Gif url={"https://farm" + gif.farm + ".staticflickr.com/" + gif.server + "/" + gif.id + "_" + gif.secret + ".jpg"} key={gif.id} />
		});
		console.log(dogs)

		return (

			<ul>
				{dogImages}
			</ul>
		);
	}

}


