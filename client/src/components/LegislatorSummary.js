import React from 'react';
import PropTypes from 'prop-types';
import { Table, Header } from 'semantic-ui-react';

const LegislatorSummary = props => (
  <div>
    <p style={{ textAlign: 'center', marginBottom: '4em' }}>
      Legislator summary
    </p>
    <Table
      basic="very"
      celled
      collapsing
      style={{ marginTop: '4em', display: 'table', margin: '0 auto' }}
    >
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Header as="h4">
              <Header.Content>State</Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>{props.obj.state}</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>
            <Header as="h4">
              <Header.Content>Chamber</Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>{props.obj.chamber}</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>
            <Header as="h4">
              <Header.Content>Next election</Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>{props.obj.next_election}</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>
            <Header as="h4">
              <Header.Content>Cash spent</Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            {Number(props.obj.spent).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>
            <Header as="h4">
              <Header.Content>Cash on hand</Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            {Number(props.obj.cash_on_hand).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>
            <Header as="h4">
              <Header.Content>Cash total</Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            {Number(props.obj.total).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);

LegislatorSummary.propTypes = {
  obj: PropTypes.shape({
    state: PropTypes.string.isRequired,
    chamber: PropTypes.string.isRequired,
    next_election: PropTypes.string.isRequired,
    spent: PropTypes.string.isRequired,
    cash_on_hand: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
  }).isRequired,
};

export default LegislatorSummary;
