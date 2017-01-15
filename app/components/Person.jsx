import React, { Component } from 'react'
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


export default class Person extends Component {
  render() {
    return (
        <TableRow>
          <TableRowColumn>{this.props.id+1}</TableRowColumn>
          <TableRowColumn>{this.props.person.name}</TableRowColumn>
          <TableRowColumn>{this.props.person.dob}</TableRowColumn>
          <TableRowColumn>{this.props.person.phone}</TableRowColumn>
        </TableRow>
    )
  }
}
