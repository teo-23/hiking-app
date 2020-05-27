import axios from 'axios';

class GoogleMapsService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/api',
      withCredentials: true
    });
    this.service = service;
  }

  fetchTrails = (lat, lng) => {
    return this.service.post('/trails', {lat, lng})
    .then(response => response.data)
  }
  
}

export default GoogleMapsService;
