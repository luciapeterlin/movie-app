import React from "react";
import {Link} from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function OptionMenu({option}){

	return(
		<Nav.Link as={Link} to={option.path}>{option.label}</Nav.Link>
	)
}

export default OptionMenu;