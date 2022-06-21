import React , {useState, useEffect} from "react";
import {Form} from "react-bootstrap";
import Loading from "../Components/Loading";
import SeriePoster from "../Components/SeriePoster";
import "../Styles/Series.css";
import { getTvGenres } from '../services/seriesGenre'

function Series(){

	const [genreOptions, setGenreOptions] = useState([]);
	const [selectOptions, setSelectOptions] = useState({orden: 'popularity.desc', genero: ''});
	const [results, setResults] = useState([]);
	const [spinner, setSpinner] = useState(true);

	useEffect(() => {
		setSpinner(true);
    const fetchData = async () => {
      try {
        setGenreOptions(await getTvGenres())
        setSpinner(false)
      } catch (error) {
        console.log('Uops! something went wrong:', error)
      }
    }
    fetchData()
	}, []);

	const handleChange = (e) => {
		setSelectOptions({
			...selectOptions,
			[e.target.name] : e.target.value
		})
	}

	useEffect(() => {
		setSpinner(true);
		fetch(`https://api.themoviedb.org/3/discover/tv?api_key=c2c2cd525b5005c063f7b1a9d54ab699&language=es-ES&sort_by=${selectOptions.orden}&include_adult=false&page=1&with_genres=${selectOptions.genero}`)
	    	.then((res) => res.json())
	      	.then((data) => {
	      		console.log(data);
				setResults(data.results);
	      		setSpinner(false);
	      	})
	      	.catch((error)=>{
            	console.log(error)
        })

	}, [selectOptions]);

	return(
		<>
			{spinner &&
				<Loading />
      		}

			<h3>Series</h3>

			<div className="select-container">
				<h6>Seleccionar género:</h6>
				<Form.Control className="select" as="select" onChange={handleChange} name="genero">
					<option value="">Todas los géneros</option>
						{genreOptions.map((genreOption)=><option value={genreOption.id}>{genreOption.name}</option>)}
				</Form.Control>
				<h6>Ordenar por:</h6>
				<Form.Control className="select" as="select"onChange={handleChange} name="orden">
					<option value="popularity.desc" >Más populares</option>			
					<option value="vote_average.desc" >Más votadas</option>
					<option value="first_air_date.desc" >Más recientes</option>
				</Form.Control>
			</div>

			<div className="results-container">	
				{results.length > 0 && results.map((result)=><SeriePoster key={result.id} {...result} results={results} />)}		
			</div>	
		</>
	)
}

export default Series;