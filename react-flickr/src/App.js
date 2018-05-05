import React, { Component } from 'react';
import axios from 'axios';
import Container from './components/Container.js';
import APIKey from './config.js';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {

// Primary state for search variables

  state = {

    gifs: [],
    term: '',
    
  }

// Perform search function using axios

  performSearch = (search) => {
    axios.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + APIKey + "&text=" + search + "&privacy_filter=1&media=photos&per_page=20&format=json&nojsoncallback=1")
    .then(response => {
      this.setState({
        gifs: response.data.photos.photo,
        term: search
      })

    })
    .catch(error => {
      console.log("error uploading", error)
    });

  }

// Render container component and pass down props

  render() {

    return (
      
      <BrowserRouter>
        <div>
            
          <Container title={this.state.term} apikey={APIKey} onSearch={this.performSearch} searchGif={this.state.gifs} />


        </div>
      </BrowserRouter>
    );
  }
}

export default App;
