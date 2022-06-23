import React from "react";

export default function Card(props){
    return (
        <div className="card">
            <img src={props.img} className="card--image" />
            <h1 className="card--title">{props.title}</h1>
            <div className="card--desc">
                <p>{props.description}</p>
            </div>
        </div>
    )
}