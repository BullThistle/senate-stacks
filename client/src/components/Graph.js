import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Table, Header } from 'semantic-ui-react';
import { PieChart, Pie, Tooltip } from 'recharts';
import '../styles/Graph.css';

export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.data = [];
    for (let i = 0; i < 9; i += 1) {
      this.data.push({
        name: this.props.obj[`${i}`]['@attributes'].org_name,
        value: this.props.obj[`${i}`]['@attributes'].total / 1000,
      });
    }
  }

  table() {
    return this.data.map(contributor => (
      <Table.Row key={contributor.name}>
        <Table.Cell>
          <Header as="h4">
            <Header.Content>{contributor.name}</Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
          {Number(contributor.value * 1000).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </Table.Cell>
      </Table.Row>
    ));
  }

  render() {
    return (
      <Grid className="centered">
        <div className="graph-container">
          <p
            style={{
              textAlign: 'center',
              marginTop: '1em',
              marginBottom: '-1em',
            }}
          >
            Top contributors (in thousands)
          </p>
          <PieChart width={1000} height={400} style={{ marginLeft: '1em' }}>
            <Pie
              dataKey="value"
              data={this.data}
              cx={500}
              cy={200}
              innerRadius={60}
              outerRadius={120}
              fill="#6a8fc3"
              label
            />
            <Tooltip />
          </PieChart>
        </div>
        <div className="table-container" style={{ marginBottom: '10em' }}>
          <h4
            style={{
              textAlign: 'center',
              marginTop: '4em',
              marginBottom: '2em',
            }}
          >
            Top contributors
          </h4>
          <Table
            basic="very"
            celled
            collapsing
            style={{ marginTop: '4em', display: 'table', margin: '0 auto' }}
          >
            <Table.Body>{this.table()}</Table.Body>
          </Table>
        </div>
      </Grid>
    );
  }
}

Graph.propTypes = {
  obj: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
