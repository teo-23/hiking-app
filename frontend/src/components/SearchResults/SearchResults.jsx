import React from 'react';
import './searchResults.css'

export default function SearchResults(props) {
    return (
        
        <div class="wrapper">
            <div className="card-container">
                <div className="card-image">
                    <img src={props.img} onError={(e)=>{e.target.onerror = null; e.target.src="http://placekitten.com/g/200/200"}} alt="nature image"/>
                </div>
                {/* <div className="card-headers">
                    <h5>trail:</h5>
                    <h5>difficulty:</h5>
                    <h5>summary:</h5>
                </div> */}
                <div className="card-info">
                    <h7>{props.name}</h7>
                    <div id="difficulty">
                        <h7>{props.difficulty}</h7>
                    </div>
                    
                    <div id="summary">
                        <h7>{props.summary}</h7>
                    </div>
                </div>
            </div>
        </div>

    )
}
