import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Subheader from 'material-ui/Subheader';

class MyStatesTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var table_rows = this.props.states.map((state, index) => {
        return (
          <TableRow style={{height:'100px', overflow: 'initial'}} key={index}>
            <TableRowColumn style={{whiteSpace: 'initial', overflow: 'initial'}}>{state.bearings}</TableRowColumn>
            <TableRowColumn style={{whiteSpace: 'initial', overflow: 'initial'}}>{state.repairman}</TableRowColumn>
            <TableRowColumn style={{whiteSpace: 'initial', overflow: 'initial'}}>{state.cost}</TableRowColumn>
          </TableRow>
        );
    });

    return (
      <div>
        <Subheader>States Table</Subheader>
        <Table>
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Bearings</TableHeaderColumn>
              <TableHeaderColumn>Repairman</TableHeaderColumn>
              <TableHeaderColumn>Cost</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover={true} displayRowCheckbox={false}>
            {table_rows}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default MyStatesTable;