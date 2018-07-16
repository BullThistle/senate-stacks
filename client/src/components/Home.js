/* eslint-disable */
import React, { Component } from 'react';
import { Container, Grid, Header, Dropdown } from 'semantic-ui-react';
import Map from './Map';
import stateOptions from '../services/DropDownService';
import '../styles/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchState: '',
      selectedState: ''
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleSearchChange(e, data) {
    console.log('e:', e, 'data:', data);
    this.setState({ searchState: data.searchQuery });
  }

  handleChange = (e, data) => {
    console.log(data.value);
    this.setState({ selectedStae: data.value });
    window.location.assign(`/${data.value}`);
  }

  /* eslint-disable class-methods-use-this */
  handleClick(e, data) {
    this.setState({ selectedState: data.value });
  }
  render() {
    return (
      <Container style={{ marginTop: '7em' }}>
        <Grid className="centered">
          <Grid.Row>
            <Header as="h1">Senate Stacks</Header>
          </Grid.Row>
          <Grid.Row>
            <div className="map-container">
              <Map />
            </div>
            <div className="dropdown-container">
              <Dropdown
                placeholder="State"
                search
                selection
                options={stateOptions}
                value={this.state.searchState}
                onSearchChange={this.handleSearchChange}
                onChange={this.handleChange}
                onClick={this.handleClick}
              />
            </div>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Home;
