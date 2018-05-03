import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Redirect, Switch, Render} from 'react-router-dom';
import Cats from './Cats.js';
import Dogs from './Dogs.js';
import Birds from './Birds.js';
import Nomatch from './Nomatch.js';
import Gif from './Gif.js';
import Query from '../Data.js';



const Photocontainer = (props) => 


	<BrowserRouter>
		<div className="photo-container">
			<h2>{props.title}</h2>
			
				<Switch>
				
				<Route exact path="/" render={(props) => (<Query search="random" />)} />
				<Route path="/cats" render={(props) => (<Query search="cat" />)} />
				<Route path="/dogs" render={(props) => (<Query search="dog" />)}  />
				<Route path="/birds" render={(props) => (<Query search="bird" />)}  />
				<Route path="/search" render={(props) => (<Query search={props.searchGif} />)}  />

				

				</Switch>
			
		</div>
	</BrowserRouter>


Photocontainer.propTypes = {
	title: PropTypes.string,
};


Photocontainer.defaultProps = {
	title: "Results",
}


export default Photocontainer;