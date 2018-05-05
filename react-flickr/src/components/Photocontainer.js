import React from 'react';
import {Route} from 'react-router-dom';
import Query from '../Data.js';



const Photocontainer = (props) => 

// Use React-router Switch and render Query component passing search term / performSearch function and / Gif state
		<div className="photo-container">
			
			
				
				<Route exact path="/" render={() => (<Query title={props.title} term="random" gif={props.searchGif} onSearch={props.onSearch}/>)} />
				<Route path="/cats" render={() => (<Query title={props.title} term="cat" gif={props.searchGif} onSearch={props.onSearch}/>)} />
				<Route path="/dogs" render={() => (<Query title={props.title} term="dog" gif={props.searchGif} onSearch={props.onSearch}/>)}  />
				<Route path="/birds" render={() => (<Query title={props.title} term="bird" gif={props.searchGif} onSearch={props.onSearch}/>)}  />
				<Route path="/search" render={() => (<Query title={props.title} term={props.searchGif} gif={props.searchGif} onSearch={props.onSearch}/>)}  />

				

			
		</div>



export default Photocontainer;