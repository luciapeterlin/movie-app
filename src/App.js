import React, {useState} from "react";
import Menu from "./Components/Menu/Menu";
import RoutesWeb from "./Components/RoutesWeb";
import {BrowserRouter} from "react-router-dom";
import {MyListProvider} from "./Context/MyListContext";
import "./App.css";

function App() {

	const [options, setOptions] = useState([
		{
			path:"/",
			label: "Inicio"
		},
		{
			path:"/peliculas",
			label: "Peliculas"
		},
		{
			path:"/series",
			label: "Series"
		},
	]);


	return (
  		<MyListProvider>
  			<div className="app-container">  	
      			<BrowserRouter>
      				<Menu options={options} />
      				<RoutesWeb />
      			</BrowserRouter>
			</div>
    	</MyListProvider>
  	);
}

export default App;
