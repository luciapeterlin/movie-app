import React from "react";
import Button from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../Styles/PopularSeriesPoster.css';

const image = "https://image.tmdb.org/t/p/w1280";

function PopularSeriesPoster(serie){
	return (
		<div className="image-container">
			<Link to={"/series/"+serie.id}>
			<img className="popularseries-image" src={image + serie.poster_path}/>
			</Link>
		 </div>
	)
}

export default PopularSeriesPoster;