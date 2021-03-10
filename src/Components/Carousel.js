import React , {useState, useEffect} from "react";
import {Carousel, Badge, Button} from "react-bootstrap";
import Loading from "../Components/Loading";
import {BsFillStarFill, BsInfoCircle} from "react-icons/bs";
import {Link} from "react-router-dom";
import "../Styles/Carousel.css";

function TrendingCarousel(){

  const [results, setResults] = useState([]);
  const [spinner, setSpinner] = useState(true);

  const image = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
  	fetch('https://api.themoviedb.org/3/trending/all/day?api_key=c2c2cd525b5005c063f7b1a9d54ab699&language=es-ES')
  		.then((res) => res.json())
  		.then((data) => {
  	  	console.log(data);
  	  	setResults(data.results);
        setSpinner(false);
  	  })
      .catch((error)=>{
            console.log(error)
        })
  }, []);

  return(

    <div>

      {spinner &&
        <Loading />
      }
      
		  <Carousel indicators={false} >
        {results.length > 0 && results.map((result)=>(
          <Carousel.Item className="carousel">
            <img
            className="d-block w-100"
            src={image + result.backdrop_path}
            alt={result.title}
            />
            
            <Carousel.Caption className="carousel-caption">  
              <h1>{result.title || result.name }</h1>
              <h5 className="original-title">({result.original_title || result.original_name}) - <Badge variant="warning" ><BsFillStarFill/>{result.vote_average}</Badge></h5>
              <p className="carousel-overview">{result.overview}</p>
      
              {result.media_type == "movie" ? 
              (<Link to={"/peliculas/"+result.id}>
                <Button variant="secondary"><BsInfoCircle/> Más información</Button>
              </Link>)
              : (<Link to={"/series/"+result.id}>
                <Button variant="secondary"><BsInfoCircle/> Más información</Button>
              </Link>)}
            </Carousel.Caption>
        </Carousel.Item>))}
      </Carousel>
    </div>
	)
}

export default TrendingCarousel;