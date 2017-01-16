import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

/**
 * A simple example of a scrollable `GridList`.
 */
class MyMachine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Subheader>Machine</Subheader>
        <h5>{this.props.machine._name}</h5>
        <h5>{this.props.machine._downtime_cost}</h5>
      </div>
    );
  }
}

export default MyMachine;