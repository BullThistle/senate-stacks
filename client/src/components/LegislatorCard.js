import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'semantic-ui-react';

export default class LegislatorCard extends Component {
  legislatorHandler = () => {
    window.location.assign(`/legislator/${this.props.obj.cid}`);
  };

  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>
            <Button onClick={this.legislatorHandler}>
              {this.props.obj.firstlast}
            </Button>
          </Card.Header>
          <Card.Meta>{this.props.obj.party}</Card.Meta>
          <Card.Description>
            First elected {this.props.obj.first_elected}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

LegislatorCard.propTypes = {
  obj: PropTypes.shape({
    cid: PropTypes.string.isRequired,
    firstlast: PropTypes.string.isRequired,
    party: PropTypes.string.isRequired,
    first_elected: PropTypes.isRequired,
  }).isRequired,
};
