import React from "react";

import "./card-style.css";

const Card = props =>{
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="computer with coffee" className="card-img-top" className="card-img-top" />                
            </div>

            <div className="card-body text-dark">
                <h4 className="card-title">{props.name}</h4>
                <p className="card-text card-secondary">{props.address}</p>
                <p className="card-text card-secondary">{props.contact}</p>
                <p className="card-text card-secondary">{props.phone}</p>
                <p className="card-text card-secondary">{props.website}</p>
                <a href={"mailto:" + props.email} className="btn btn-outline-success">Contact</a>
            </div>
        </div>
    );
}

export default Card;