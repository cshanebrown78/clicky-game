import React from "react";
import "./style.css";

const Title = (props) => {
    return (
        <nav className="navbar">
          <ul>
            <li>Clicky Game</li>
            <li>{props.message}</li>
            <li> 
              Score:
              {" " + props.score + " "} 
              | Top Score: 
              {" " + props.topScore}
            </li>
          </ul>
        </nav>
    );   
};

export default Title;