import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AddTrail from './AddTrail';

class TrailsList extends Component {
  constructor(){
      super();
      this.state = { listOfTrails: [] };
  }

  getAllTrails = () =>{
    axios.get(`http://localhost:5000/api/trails`)
    .then(responseFromApi => {
      this.setState({
        listOfTrails: responseFromApi.data
      })
    })
  }

  componentDidMount() {
    this.getAllTrails();
  }

  render(){
    return(
      <div className="trail-list">
        <div style={{width: '60%', float:"left"}}>
          { this.state.listOfTrails.map( trail => {
            return (
              <div key={trail._id}>
                <Link to={`/trails/${trail._id}`}>
                  <h3>{trail.title}</h3>
                </Link>
              </div>
            )})
          }
        </div>
        <div style={{width: '40%', float:"right"}}>
            <AddTrail getData={() => this.getAllTrails()}/>
        </div>
      </div>
    )
  }
}

export default TrailsList;
