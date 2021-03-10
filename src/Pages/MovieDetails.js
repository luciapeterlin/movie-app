import React, {useState, useEffect, useContext} from "react";
import {Card, Button, Badge} from 'react-bootstrap';
import { BsHeartFill, BsFillStarFill, BsFillXCircleFill } from "react-icons/bs";
import {MyListContext} from "../Context/MyListContext";
import Loading from "../Components/Loading";
import "../Styles/MovieDetails.css";
import AlertCustom from "../Components/AlertCustom";

const image = "https://image.tmdb.org/t/p/w1280";

function DetallePelicula(props){

	const [pelicula, setPelicula] = useState([]);
	const [myListFavorites, setMyListFavorites] = useContext(MyListContext);
	const [spinner, setSpinner] = useState(true);
	const [alert,setAlert] = useState({variant:"",text:""})

	useEffect(() => {
		setSpinner(true)
		fetch(`https://api.themoviedb.org/3/movie/${(props.match.params.id)}?api_key=c2c2cd525b5005c063f7b1a9d54ab699&language=es`)
			.then((res) => res.json())
			.then((data) => {
		  			console.log(data);
		  			setPelicula(data);
		  			setSpinner(false);
		  			})
			.catch((error)=>{
	            console.log(error)
	        })
	}, []);


	const favorite= {
	      id: pelicula.id,
	}

	const saveFavs = (pelicula) => {
	    let repeated = myListFavorites.filter(function(pelicula){ return pelicula.id === favorite.id}).length;
	    if (!repeated){
	        setMyListFavorites([...myListFavorites, pelicula]);
	        setAlert({variant:"success",text:"Agregado a Mi Lista"});
	    } else{
	    	setAlert({variant:"danger",text:"Ya ha sido agregado a Mi Lista"});
	    };
	}

	return(
		<>
			{spinner && <Loading />}

			<Card className="bg-dark text-white">
  				<Card.Img className="background-image" src={image + pelicula.backdrop_path} alt={pelicula.title}/>
  					<Card.ImgOverlay className="ImgOverlay">
				 		<div className="column-1">
							<img
							    className="movie-poster-path"
							    src={image + pelicula.poster_path}
							    alt={pelicula.title}/>
						</div>

			 			<div className="column-2">
			    			<Card.Title><h1>{pelicula.title}</h1></Card.Title>
			    			<Card.Text>
			      				<h5 className="movie-original-title">({pelicula.original_title}) - <Badge variant="warning" ><BsFillStarFill/>{pelicula.vote_average}</Badge></h5>
			    			</Card.Text>
			    			<Card.Text>{pelicula.overview}</Card.Text>
							<Button variant="danger" onClick={()=>saveFavs(pelicula)}><BsHeartFill/> Agregar a Mi Lista</Button>
			    			<AlertCustom variant={alert.variant} text={alert.text} />
					    </div>
					</Card.ImgOverlay>
			</Card>
		</>
	)
}

export default DetallePelicula;