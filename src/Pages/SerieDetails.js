import React, {useState, useEffect, useContext} from "react";
import {Card, Button, Badge} from 'react-bootstrap';
import {BsHeartFill, BsFillStarFill, BsFillXCircleFill} from "react-icons/bs";
import {MyListContext} from "../Context/MyListContext";
import Loading from "../Components/Loading";
import AlertCustom from "../Components/AlertCustom";

const image = "https://image.tmdb.org/t/p/w1280";

function DetalleSerie(props){

	const [serie, setSerie] = useState({});
	const [myListFavorites, setMyListFavorites] = useContext(MyListContext);
	const [spinner, setSpinner] = useState(true);
	const [alert,setAlert] = useState({variant:"",text:""})

useEffect(() =>{
	setSpinner(true);
	fetch(`https://api.themoviedb.org/3/tv/${(props.match.params.id)}?api_key=c2c2cd525b5005c063f7b1a9d54ab699&language=es-ES`)
	.then((res) => res.json())
	.then((data) => {
	  	console.log(data);
	  	setSerie(data);
	  	setSpinner(false);
	  			})
	.catch((error)=>{
        console.log(error)
    })
}, []);


const favorite= {
      id: serie.id,
}

const saveFavs = (serie) => {
    let repeated = myListFavorites.filter(function(serie){ return serie.id === favorite.id}).length;
    if (!repeated){
        setMyListFavorites([...myListFavorites, serie]);
        setAlert({variant:"success",text:"Agregado a Mi Lista"});
    } else{
    	setAlert({variant:"danger",text:"Ya ha sido agregado a Mi Lista"});
    }
  }

return (
	<>
		{spinner &&<Loading />}

		<Card className="bg-dark text-white" >
  			<Card.Img className="background-image" src={image + serie.backdrop_path} alt="Card image"/>
 		 		<Card.ImgOverlay className="ImgOverlay">
 					<div className="column-1">
						<img
			      			className="serie-poster-path"
			     	 		src={image + serie.poster_path}
			      			alt={serie.name}/>
					</div>
 	
 					<div className="column-2">
    					<Card.Title><h1>{serie.name}</h1></Card.Title>
    						<Card.Text>
      							<h5 className="movie-original-title">({serie.original_name}) - <Badge variant="warning" ><BsFillStarFill/>{serie.vote_average}</Badge></h5>
    						</Card.Text>
    						<Card.Text>{serie.overview}</Card.Text>
  
    						<Button variant="danger" onClick={()=>saveFavs(serie)}><BsHeartFill/> Agregar a Mi Lista</Button>
    						<AlertCustom variant={alert.variant} text={alert.text} />
					</div>
		    	</Card.ImgOverlay>
			</Card>
		</>
	)

}

export default DetalleSerie;