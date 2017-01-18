/**
 * The component that reperesents the 
 * bearings list and status on the interface.
 * It is based on Material UI and ReactJS.
 */
import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

/**
 * A simple example of a scrollable `GridList`.
 */
class MyBearings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bearingsList = this.props.bearings.map((bearing, index) => {
      return (
        <li key={index}>
          {bearing._name} ({bearing._cost}) ({bearing._distribution_sample})
        </li>
      );
    });

    return (
      <div>
        <Subheader>Bearings</Subheader>
        <ul>
          {bearingsList}
        </ul>
      </div>
    );
  }
}

export default MyBearings;