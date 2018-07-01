import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from 'react-loading-animation';
import { Container, Grid, Header, Card } from 'semantic-ui-react';
import LegislatorService from '../services/LegislatorService';
import LegislatorCard from './LegislatorCard';

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.legislatorService = new LegislatorService();
  }

  componentWillMount() {
    this.fillData();
  }

  loading() {
    if (!this.state.response) {
      return <Loading />;
    }
    return undefined;
  }

  fillData() {
    const thisRef = this;
    const { states } = this.props.match.params;
    this.legislatorService.getLegislatorsFromState(states, (data) => {
      thisRef.setState(data);
    });
  }

  legislator() {
    if (
      this.state.response &&
      this.state.response.legislator instanceof Array
    ) {
      return this.state.response.legislator.map(object => (
        <LegislatorCard
          key={object['@attributes'].firstlast}
          obj={object['@attributes']}
        />
      ));
    }
    return undefined;
  }

  render() {
    return (
      <Container style={{ marginTop: '7em' }}>
        <Grid className="centered">
          <Grid.Row>
            <Header as="h1">Legislators</Header>
          </Grid.Row>
          <Grid.Row>
            {this.loading()}
            <Card.Group className="centered">{this.legislator()}</Card.Group>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

State.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      states: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
