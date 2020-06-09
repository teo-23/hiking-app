import React, { Component } from 'react';
import './AddTrailForm.css'
import TrailService from '../../service/trail-service'

class AddTrailForm extends Component {

    state = { 
            title: '',
            description: '',
            service: new TrailService()
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const newTrail = {
            latitude: this.props.lat,
            longitude: this.props.lng,
            title: this.state.title,
            description: this.state.description
          }
        this.state.service.createTrail(newTrail)
        .then(response => {
            console.log(response)
        })
        this.props.hideForm()
    }

    handleInput = (e) => {
        let {name, value} = e.target;
        this.setState({[name]: value})
    }

    render() {
        return (

        <div class="wrapper">
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>Title</label>
                <input type="text" name="title" value={this.state.title} onChange={(e)=> this.handleInput(e)} />
                <label>Description</label>
                <input type="text" name="description" value={this.state.description} onChange={(e)=> this.handleInput(e)} />
                <button type="submit">add Trail</button>
            </form>
        </div>

        )
}
}

export default AddTrailForm;