
import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import SearchResults from "../Components/SearchResults";
import Loading from "../Components/Loading";
import {BsSearch, BsFillXSquareFill} from "react-icons/bs";
import "../Styles/SearchBox.css";

function SearchBox(){

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleOnChange = (event) => {
      setQuery(event.target.value);
      if (event.target.value == "") {
        setMovies([]);
        setError(false);
      }
  };

  const handleSubmit = async (event)=>{
      event.preventDefault();
      setSpinner(true);

      fetch(`https://api.themoviedb.org/3/search/multi?api_key=c2c2cd525b5005c063f7b1a9d54ab699&language=es-ES&query=${query}&page=1&include_adult=false`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMovies(data.results);
          setError(false);
          setShowOverlay(true);
        if(data.results.length == 0){
              setError(true);
              setShowOverlay(false);
              console.log("no results");
        }
          setSpinner(false);
        });
  };

  const handleClose = (event) => {
    setQuery("");
    setMovies([]);
    setShowOverlay(false);
  };

  return(
    <>
      <div className="searchbox-container">
        <Form  inline onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control 
              type="text" 
              placeholder="Buscar peliculas y series"  
              value={query} 
              onChange={handleOnChange}/>
          </Form.Group>
          <Button type="submit" variant="dark" className="search-button"><BsSearch/></Button>
        </Form>
      </div>

        {error && 
          <div className="error-overlay">
            <h3 className="no-results">No hay resultados</h3>
          </div>
        }

        {spinner && 
          <div className="search-overlay">
            <Loading/>   
        </div>    
        }       

        {showOverlay && 
          <div className="search-overlay">
            <Button variant="dark" className="close-button" onClick={handleClose}><BsFillXSquareFill className="BsFillXSquareFill"/></Button>
            <div onClick={handleClose} className="search-results-container">
              {movies.map(movie=><SearchResults key={movie.id} {...movie} />)}
            </div>
          </div>}
    </>
    )
}

export default SearchBox;