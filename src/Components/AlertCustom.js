import React from "react";
import Alert from 'react-bootstrap/Alert'
import "../Styles/AlertCustom.css";

function AlertCustom(props){
    return(
        <Alert className="alert" variant={props.variant}>
            {props.text}
        </Alert>
    )
}

export default AlertCustom