import React, {useContext} from "react";
import {MyListContext} from "../Context/MyListContext";
import {Link} from 'react-router-dom';
import "../Styles/MyList.css";

const image = "https://image.tmdb.org/t/p/w1280";

function MyList (){

	const [myListFavorites, setMyListFavorites] = useContext(MyListContext);

	return(
		<>
			<h3>Mi Lista</h3>
			<div className="favorites-container">
				{myListFavorites.map((pelicula) => (
					<div className="favoriteposter-container">
						<img 
							className="favoriteimage-container"
							src={image + pelicula.poster_path}
							alt={pelicula.title}
							/>
					</div>
				))}
			</div>
		</>
	)
}

export default MyList;