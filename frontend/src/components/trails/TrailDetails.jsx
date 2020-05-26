import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditTrails from './EditTrails';

class TrailDetails extends Component {
  constructor(props){
      super(props);
      this.state = {};
  }

  componentDidMount(){
      this.getSingleTrail();
  }

  getSingleTrail = () => {
      const { params } = this.props.match;
      axios.get(`http://localhost:5000/api/trails/${params.id}`)
      .then( responseFromApi =>{
          const theTrail = responseFromApi.data;
          this.setState(theTrail);
      })
      .catch((err)=>{
          console.log(err)
      })
  }

  renderEditForm = () => {
    if(!this.state.title){
      this.getSingleTrail();
    } else {
      return <EditTrails theTrail={this.state} getTheTrail={this.getSingleTrail} {...this.props} />  
    }
  }

  deleteTrail = () => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:5000/api/trails/${params.id}`)
    .then( () =>{
        this.props.history.push('/trails');       
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  ownershipCheck = (trail) => {
    if(this.props.loggedInUser && trail.owner === this.props.loggedInUser._id){
      return (
        <div>
          <div>{this.renderEditForm()} </div>
          <button onClick={() => this.deleteTrail(this.state._id)}>Delete trail</button>
        </div>
      )
    } 
  }
   
  render(){
    return(
      <div className="trail-details">
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        <div >
          {this.ownershipCheck(this.state)}
        </div>
        <Link to={'/trails'}>Back to trails</Link>
      </div>
    )
  }
}

export default TrailDetails;