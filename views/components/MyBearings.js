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
    return (
      <div>
        <Subheader>Bearings</Subheader>
      </div>
    );
  }
}

export default MyBearings;