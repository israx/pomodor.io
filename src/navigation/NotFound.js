//Not Found here
import React from "react";
import { Link } from "react-router-dom"
//import "./styles-pomodoro.css"


const NotFound = () => {
    return (

        <div style={{display: 'center'}}>
            <img src="/pomodoro-image.jpg" alt="image" height="250"/>
            <h1>Sorry</h1>
            <p>That page cannot be found</p>
            <Link to="/">Back to the homepage...</Link>
        </div>
    );
}

export default NotFound;