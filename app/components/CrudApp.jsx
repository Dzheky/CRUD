import React, { Component } from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

import Person from './Person.jsx'

export default class CrudApp extends Component {

  render() {
    return (
      <Table>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableHeaderColumn tooltip="Идентификационный номер">ID</TableHeaderColumn>
          <TableHeaderColumn tooltip="Фамилия Имя Отчество">ФИО</TableHeaderColumn>
          <TableHeaderColumn tooltip="Дата Рождения">Дата Рождения</TableHeaderColumn>
          <TableHeaderColumn tooltip="Телефон">Телефон</TableHeaderColumn>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
          showRowHover={true}
          stripedRows={true}
        >
          {this.props.people.map((person, id) => {
            return (
              <TableRow>
                <TableRowColumn>{id+1}</TableRowColumn>
                <TableRowColumn>{person.name}</TableRowColumn>
                <TableRowColumn>{person.dob}</TableRowColumn>
                <TableRowColumn>{person.phone}</TableRowColumn>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    )
  }
}
