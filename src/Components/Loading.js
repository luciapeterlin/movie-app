import {Spinner} from 'react-bootstrap';
import "../Styles/Loading.css";

function Loading(){
	return(
		<div className="spinner-container">
		    <Spinner className="spinner" animation="border" role="status" variant="warning"></Spinner>
		</div>
	)
}

export default Loading;