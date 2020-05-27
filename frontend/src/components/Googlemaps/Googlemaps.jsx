import React, { Component } from 'react';
import './googlemaps.css'
import GoogleMapReact from 'google-map-react';
import AnyReactComponent from './AnyReactComponent.jsx'
import GoogleMapsService from '../../service/googlemaps-service'
 
//const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Googlemaps extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11,
  };

  state = {
    marker: {},
    service: new GoogleMapsService()
  }

  _onClick = ({lat, lng}) => {
    //console.log(lat, lng)
    this.state.service.fetchTrails(lat, lng)
    .then(response => console.log(response))
    //this.setState({marker:{lat, lng}})
  }
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div id="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAfqAPziBRCHjNvY4N7Egv2xUpmolLQQmI' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onClick={this._onClick}
        >
        <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={"My coolnes"}
            /* road circle */
        />

        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Googlemaps;