import React, { Component } from 'react';
import './googlemaps.css'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.jsx'
import AddTrail from './AddTrail.jsx'
import GoogleMapsService from '../../service/googlemaps-service'
//const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Googlemaps extends Component {
  static defaultProps = {
    center: {
      lat: 52.3727598,
      lng: 4.8936041
    },
    zoom: 4,
  };

  state = {
    lat: '',
    lng: '',
    trails: [],
    succes: null,
    service: new GoogleMapsService()
  }

  _onClick = ({lat, lng}) => {
    //console.log(lat, lng)
    this.state.service.fetchTrails(lat, lng)
    .then(response => {
      console.log(response.trails)
      console.log(response.success)

      this.setState({trails: response.trails, succes: response.success, lat, lng})
    })
    
  }
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div id="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onClick={this._onClick}
        >
          
          <AddTrail
          lat={this.state.lat}
          lng={this.state.lng}
          />
        
        {this.state.trails.length > 0 && this.state.trails.map((trail, index) => (
          <Marker
          key={index}
          lat={trail.latitude}
          lng={trail.longitude}
          text={trail.location}
          />  
        ))}

        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Googlemaps;