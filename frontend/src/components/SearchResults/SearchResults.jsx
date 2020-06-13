import React, { Component } from 'react';
import trailService from '../../service/trail-service'
import './searchResults.css'

class SearchResults extends Component {
    
    state = {
        img: this.props.img,
        name: this.props.name,
        difficulty: this.props.difficulty,
        service: new trailService()
    }

    addToFavorite = () => {
        const trail = {
            img: this.state.img,
            name: this.state.name,
            difficulty: this.state.difficulty,
        }
        this.state.service.addToFavorite(trail)
    }

    render() {
        return (
            <div class="wrapper">
            <div className="card-container">
                <div className="card-image">
                    <img src={this.props.img} onError={(e)=>{e.target.onerror = null; e.target.src="http://placekitten.com/g/200/200"}} alt="nature image"/>
                </div>
                {/* <div className="card-headers">
                    <h5>trail:</h5>
                    <h5>difficulty:</h5>
                    <h5>summary:</h5>
                </div> */}
                <div className="card-info">
                    <h7>{this.props.name}</h7>
                    <div id="difficulty">
                        <h7>{this.props.difficulty}</h7>
                    </div>
                    
                    <div id="summary">
                        <h7>{this.props.summary}</h7>
                    </div>
                    
                </div>
                <div className="like">
                    <button onClick={this.addToFavorite}>favorite</button>
                </div>
            </div>
        </div>
        );
    }
}

export default SearchResults;