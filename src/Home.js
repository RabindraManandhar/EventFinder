import React, {Component} from 'react';
import './Home.css';
import Map from './Map';
import {CardImg} from 'reactstrap';

class Home extends Component {
  constructor(props) {
    super(props);
      this.state = {
        loading: true,
        event: []
      };
  }

  componentDidMount() {
    fetch('/api/events?')
    .then(res => {
      return res.json()
    })
    .then(res => {

      this.setState({ event: res.data, loading: false })
      console.log(res.data);
    });
  }

  render() {
  return (
    <div>

      {this.state.loading || !this.state.event ? (
        <div>
          <CardImg top height="100%" src={require('./loading.gif')} alt="Loading..." />
        </div>
          ) : (

    <div>
      
      <Map
        googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key="+process.env.REACT_APP_API_KEY}
        loadingElement={<div className="loading-element"/>}
        containerElement={<div className="container-element"/>}
        mapElement={<div className="map-element"/>}
        apidata = {this.state.event}
      />

    </div>

      )}
    </div>
    );
  }
}

export default Home;
