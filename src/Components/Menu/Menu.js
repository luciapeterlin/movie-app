import React, {useContext} from "react";
import OpcionesMenu from "./OptionsMenu";
import {Navbar, Nav, Button, Badge} from "react-bootstrap";
import {Link} from "react-router-dom";
import { BsList } from "react-icons/bs";
import SearchBox from "../SearchBox";
import {MyListContext} from "../../Context/MyListContext";
import "../../Styles/Menu.css";

function Menu(props){

	const [myListFavorites, setMyListFavorites] = useContext(MyListContext);

	return(
		<div>
			<Navbar collapseOnSelect expand="lg" variant="dark">
	    		<Navbar.Brand>Movie App</Navbar.Brand>
	    		<Navbar.Toggle aria-controls="responsive-navbar-nav" />
  				<Navbar.Collapse id="responsive-navbar-nav">
		    		<Nav className="mr-auto">
						{props.options.map(option=><OpcionesMenu option={option} />)}
		    		</Nav>
		    		<Nav>
		  				<SearchBox />
	      				<Button variant="warning" as={Link} to={"/lista"}>
	      					<BsList/>Mi Lista<Badge variant="light">{myListFavorites.length}</Badge>
	      				</Button>
	      			</Nav>
     			 </Navbar.Collapse>
  			</Navbar>
		</div>
	)
}

export default Menu;

