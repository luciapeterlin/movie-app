import React from "react";
import {BiConfused } from "react-icons/bi";
import {Link} from 'react-router-dom';
import "../Styles/SearchResults.css";

const image = "https://image.tmdb.org/t/p/w1280";

function SearchResults(movie) {

  return (
    <div>
      {movie.media_type == "movie" ? 

        (<Link to={"/peliculas/"+movie.id}>
          <div className="search-result-container">
            {movie.poster_path ? 
            (<img
            className="search-result-image"
            src={image + movie.poster_path}
            alt={`${movie.title} Poster`}/>
            ) 
            :
            (<div className="no-image-container">
            <BiConfused className="BiConfused"/>
            <p className="no-image-text">Imagen no disponible</p>
            </div>
            )}
          </div>
        </Link>)

       : 

       (<Link to={"/series/"+movie.id}>
          <div className="search-result-container">
            {movie.poster_path ? 
            (<img
              className="search-result-image"
              src={image + movie.poster_path}
              alt={`${movie.title} Poster`}/>
            ) 
            : 
            (<div className="no-image-container">
            <BiConfused className="BiConfused"/>
            <p className="no-image-text">Imagen no disponible</p>
            </div>
            )}
          </div>
        </Link>)
      }
    </div>
  )
}

export default SearchResults;