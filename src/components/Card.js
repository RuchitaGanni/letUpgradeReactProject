import React from 'react';

function Card(props) {
console.log(props);
    return (
        // <div>
        //     <p>
        //         Welcome, {props.fname} {props.lname}
        //     </p>
        // </div>
        <div className="options">
            <h2>{props.title}</h2>
            <img src={props.image}  className="options-img"></img>
            <h3>Subtitle : {props.subtitle} </h3>
            <p>Description : {props.desc}</p>
            <p>More : {props.moree}</p>
            <button>Book Now</button>
        </div>

    )
}
export default Card;