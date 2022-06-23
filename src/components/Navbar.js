import React from "react";
import logo from "../images/title.png"

export default function Navbar(){
    return (
        <nav>
            {/* <h1 className="nav--title">Analystic Eye</h1> */}
            <img src={logo} className="nav--logo"/>
        </nav>
    )
}