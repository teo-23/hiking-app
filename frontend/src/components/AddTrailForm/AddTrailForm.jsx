import React, { Component } from 'react';
import './AddTrailForm.css'
import TrailService from '../../service/trail-service'

class AddTrailForm extends Component {

    state = { 
            name: '',
            summary: '',
            difficulty: 'green',
            selectedFile: null,
            service: new TrailService()
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData()
        data.append('trailimage', this.state.selectedFile)
        data.append('latitude', this.props.lat)
        data.append('longitude', this.props.lng)
        data.append('name', this.state.name)
        data.append('summary', this.state.summary)
        data.append('difficulty', this.state.difficulty)

        this.state.service.createTrail(data)
        .then(response => {
            console.log(response)
            this.props.hideForm()
        })
    }

    handleFileInput = (e) => {
       this.setState({selectedFile: e.target.files[0]})
      }

    handleInput = (e) => {
        let {name, value} = e.target;
        this.setState({[name]: value})
    }

    render() {
        return (

        <div class="form-wrapper">
            <form id="formy" onSubmit={(e) => this.handleSubmit(e)}>

                <div id="one">
                <h4>title</h4>
                <input type="text" name="name" value={this.state.name} onChange={(e)=> this.handleInput(e)} />

                <h4>description</h4>
                <textarea name="summary" value={this.state.summary} onChange={(e)=> this.handleInput(e)}></textarea>
                
                
                <div id="difficult">
                <h4>difficulty</h4>
                <select name="difficulty" value={this.state.difficulty} onChange={(e)=> this.handleInput(e)}>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                    <option value="black">black</option>
                </select>
                </div>
                </div>
                

                <div id="two">
                <div id="file-upload">
                <input id="photo" type="file" name="trailimage" onChange={this.handleFileInput}/>
                </div>

                <button type="submit">add Trail</button>
                </div>
            </form>
        </div>

        )
}
}

export default AddTrailForm;