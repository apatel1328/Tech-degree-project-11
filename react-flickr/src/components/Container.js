import React from 'react';
import Search from './Search.js';
import Navigation from './Navigation.js';
import Photocontainer from './Photocontainer.js';
import {Route} from 'react-router-dom';




const Container = (props) => 

// Render search input - pass search component performSearch function / navigation / and photo container


		<div className="container">

			<Route path="/search" render={() => (<Search onSearch={props.onSearch} /> )} />

			<Navigation />

			<Photocontainer title={props.title} onSearch={props.onSearch} searchGif={props.searchGif}/>

		</div>


export default Container;