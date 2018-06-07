import React, { Component } from 'react';
import USAMap from 'react-usa-map';
import MapService from '../../services/MapService';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.mapService = new MapService();
  }

  mapHandler() {
    window.location.assign(`/${this.event.target.dataset.name.toLowerCase()}`);
  }

  render() {
    return (
      <div>
        <USAMap
          customize={this.mapService.statesColor()}
          onClick={this.mapHandler}
        />
      </div>
    );
  }
}
