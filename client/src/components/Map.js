import React, { Component } from 'react';
import USAMap from 'react-usa-map';
import MapService from '../services/MapService';
import '../styles/Map.css';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.mapService = new MapService();
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.forceUpdate();
  };

  mapHandler = (event) => {
    window.location.assign(`/${event.target.dataset.name.toLowerCase()}`);
  };

  render() {
    return (
      <div>
        <USAMap
          width={window.innerWidth}
          customize={this.mapService.statesColor()}
          onClick={this.mapHandler}
        />
      </div>
    );
  }
}
