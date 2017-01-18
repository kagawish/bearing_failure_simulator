/**
 * The component that reperesents
 * the repairman and its on the interface.
 * It is based on Material UI and ReactJS.
 */
import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

/**
 * A simple example of a scrollable `GridList`.
 */
class MyRepairman extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Subheader>Repairman</Subheader>
        <h5>{this.props.repairman._name} ({this.props.repairman._repair_cost_per_hour}) ({this.props.repairman._distribution_sample})</h5>
      </div>
    );
  }
}

export default MyRepairman;