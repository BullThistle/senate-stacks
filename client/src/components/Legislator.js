import React, { Component } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';
import Loading from 'react-loading-animation';
import PropTypes from 'prop-types';
import LegislatorService from '../services/LegislatorService';
import Graph from './Graph';
import LegislatorSummary from './LegislatorSummary';

export default class Legislator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidateInformation: {},
      contributorInformation: [],
    };
    this.legService = new LegislatorService();
    this.graph = this.graph.bind(this);
  }

  componentDidMount() {
    const { cid } = this.props.match.params;
    this.legService.getLegislator(cid, (data) => {
      this.setState({ candidateInformation: data });
    });
    this.legService.getLegislativeContributor(cid, (data) => {
      this.setState({ contributorInformation: data });
    });
  }

  loading() {
    if (
      this.state.contributorInformation.length === 0 &&
      Object.keys(this.state.candidateInformation).length === 0
    ) {
      return <Loading />;
    }
    return undefined;
  }

  graph() {
    if (
      this.state.contributorInformation &&
      this.state.contributorInformation['1']
    ) {
      return <Graph obj={this.state.contributorInformation} />;
    }
    return undefined;
  }

  summary() {
    if (
      this.state.candidateInformation &&
      this.state.candidateInformation.cand_name
    ) {
      return <LegislatorSummary obj={this.state.candidateInformation} />;
    }
    return undefined;
  }

  render() {
    return (
      <Container style={{ marginTop: '7em' }}>
        <Grid columns={2} divided>
          <Grid.Row className="centered">
            <Header>{this.state.candidateInformation.cand_name}</Header>
            {this.loading()}
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer={8} tablet={8} mobile={16}>
              {this.summary()}
            </Grid.Column>
            <Grid.Column computer={8} tablet={8} mobile={16}>
              {this.graph()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

Legislator.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      cid: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
