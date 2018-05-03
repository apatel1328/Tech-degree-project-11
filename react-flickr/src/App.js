import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import axios from 'axios';
import Container from './components/Container.js';
import Gif from './components/Gif.js';
import APIKey from './config.js';
import Search from './components/Search.js';

class App extends Component {


  performSearch = (search) => {
    axios.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + APIKey + "&text=" + search + "&privacy_filter=1&media=photos&per_page=20&format=json&nojsoncallback=1")
    .then(response => {
      this.setState({
        gifs: response.data.photos.photo
      })

    })
    .catch(error => {
      console.log("error uploading", error)
    });

  }



  render() {

    return (
      

      <div>
          
        <Container title="Gallery Results" apikey={APIKey} onSearch={this.performSearch} searchGif={this.gifs} />


      </div>
    );
  }
}

export default App;
