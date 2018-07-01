import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import { PieChart, Pie, Tooltip } from 'recharts';

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

  render() {
    return (
      <Grid className="centered">
        <p>Top contributors (in thousands)</p>
        <PieChart width={1000} height={400}>
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
      </Grid>
    );
  }
}

Graph.propTypes = {
  obj: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
