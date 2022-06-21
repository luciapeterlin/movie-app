import React , {useState, useEffect} from "react";
import { getPopularSeries } from '../services/popularSeries'
import PopularSeriesPoster from "../Components/PopularSeriesPoster";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Container} from "react-bootstrap";
import "../Styles/PopularSeries.css";

function PopularSeries(){

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
              slidesToScroll: 1
            }
        }
      ]
  };

	const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setResults(await getPopularSeries())
      } catch (error) {
        console.log('Uops! something went wrong:', error)
      }
    }
    fetchData()
  }, []);



  return (
    <div className="series-container">
      <h4>Series más populares</h4>
      <Container fluid >
		    <Slider {...settings}> 
          {results.length > 0 && results.map((result)=><PopularSeriesPoster key={result.id} {...result} />)}
		    </Slider> 
      </Container>
	</div>
  );
}

export default PopularSeries;