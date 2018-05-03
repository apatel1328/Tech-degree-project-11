import React from 'react';
import Search from './Search.js';
import Navigation from './Navigation.js';
import Photocontainer from './Photocontainer.js';
import PropTypes from 'prop-types';
import APIKey from '../config.js';
import {BrowserRouter, Route, Redirect, Switch, Render} from 'react-router-dom';




const Container = (props) => 

	<BrowserRouter>
		<div className="container">

			<Route path="/search" render={(props) => (<Search onSearch={props.onSearch} /> )} />

			<Navigation />

			<Photocontainer title={props.title} searchGif={props.searchGif}/>

		</div>
	</BrowserRouter>


export default Container;