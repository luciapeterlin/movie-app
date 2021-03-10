import React from "react";
import {Link} from 'react-router-dom';
import {BiConfused} from "react-icons/bi";
import "../Styles/MoviePoster.css";

const image = "https://image.tmdb.org/t/p/w1280";

function MoviePoster(result) {

	return (
		<div className="poster-container">
			<Link to={"/peliculas/"+result.id}>
			  	{result.poster_path ? 
			  	(<img src={image + result.poster_path}/>) 
			  	:
				(<div className="BiConfused-container">
	         	<BiConfused className="BiConfused"/>
	            <p className="no-image">Imagen no disponible</p>
	            </div>
	        	)}
			 </Link>
		</div>
	)

}

export default MoviePoster;