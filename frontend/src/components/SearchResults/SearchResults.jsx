import React from 'react';
import './searchResults.css'

export default function SearchResults(props) {
    return (

        <div class="wrapper">
            <div className="card-container">
                <div className="card-image">
                    <img src={props.img} alt=""/>
                </div>
                <div className="card-info">
                    <p>name: {props.name}</p>
                    <p>difficulty: {props.difficulty}</p>
                    <p>summary: {props.summary}</p>
                </div>
            </div>
        </div>

    )
}
