import Carousel from "../Components/Carousel";
import PopularMovies from "../Components/PopularMovies";
import PopularSeries from "../Components/PopularSeries";

function Home(){
	return(
		<div>
			<Carousel/>
			<PopularMovies/>
			<PopularSeries/>
		</div>
	)
}

export default Home;