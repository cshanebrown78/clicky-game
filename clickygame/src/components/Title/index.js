import React from "react";
// import { Jumbotron } from "reactstrap";
import "./style.css";

const Title = (props) => {
    return (
        <nav className="navbar">
          <ul>
            <li>Clicky Game</li>
            <li>{props.message}</li>
            <li>
              Score: 
              {props.score}
               | Top Score: 
              0
            </li>
          </ul>
        </nav>
    );   
};

export default Title;