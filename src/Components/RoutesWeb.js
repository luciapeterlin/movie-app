import {Route} from "react-router-dom";
import Series from "../Pages/Series";
import Movies from "../Pages/Movies";
import MovieDetails from "../Pages/MovieDetails";
import SerieDetails from "../Pages/SerieDetails";
import Home from "../Pages/Home";
import MyList from "../Pages/MyList";

function RoutesWeb(){
	return(
	     <div>
                  <Route path="/" exact component={Home} />
      		<Route path="/peliculas" exact component={Movies} />
            	<Route path="/series" exact component={Series} />
            	<Route path="/peliculas/:id" exact component={MovieDetails} />
            	<Route path="/series/:id" exact component={SerieDetails} />
                  <Route path="/lista" exact component={MyList} />
      	</div>
	)
}

export default RoutesWeb;