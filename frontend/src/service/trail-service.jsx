import axios from 'axios';

class TrailService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/api',
      withCredentials: true
    });
    this.service = service;
  }

  createTrail = (trail) => {
    return this.service.post('/createTrail', {trail})
    .then(response => response.data)
  }

  fetchTrails = (lat, lng) => {
    return this.service.post('/trails', {lat, lng})
    .then(response => response.data)
  }
  
}

export default TrailService;
