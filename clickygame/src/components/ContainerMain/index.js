import React from "react";
import "./style.css";

function ContainerMain(props) {
    return <div className="container">{props.children}</div>
}

export default ContainerMain;