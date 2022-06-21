import React , {useState, useEffect} from "react";
import { getPopularMovies } from '../services/popularMovies'
import PopularMoviesPoster from "../Components/PopularMoviesPoster";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Container} from "react-bootstrap";
import "../Styles/PopularMovies.css";

function PopularMovies(){

  var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          }
        ]
      };


  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setResults(await getPopularMovies())
      } catch (error) {
        console.log('Uops! something went wrong:', error)
      }
    }
    fetchData()
  }, []);


  return (
    <div className="popularmovies-container">
  	 <h4>Películas más populares</h4>
  	 <Container fluid >
  		  <Slider {...settings} > 
  			 {results.length > 0 && results.map((result)=><PopularMoviesPoster key={result.id} {...result} />)}
  		  </Slider> 
  	</Container>
  </div>
  );
}

export default PopularMovies;
