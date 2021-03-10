import React from "react";
import {Link} from 'react-router-dom';
import {BiConfused} from "react-icons/bi";
import "../Styles/SeriePoster.css";

const image = "https://image.tmdb.org/t/p/w1280";

function SeriePoster(results){
	return (
		<div className="serieposter-container">
			<Link to={"/series/"+results.id}>
		 		{results.poster_path ? 
		 		(<img src={image + results.poster_path}/>) 
		 		:
			 	(<div className="BiConfused-container">
	         	<BiConfused className="BiConfused"/ >
	          	<p className="no-image">Imagen no disponible</p>
	          	</div>
	        	)}
			</Link>
		</div>
	)
}

export default SeriePoster;