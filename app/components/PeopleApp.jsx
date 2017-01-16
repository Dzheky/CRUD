import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import Delete from 'material-ui/svg-icons/action/delete'

import Person from './Person.jsx'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

const editButtonStyle = {
  width: '70px',
  paddingLeft: '0px',
}

export default class PeopleApp extends Component {
  
  state = {
    personVisible: false,
    personInfo: {},
  }
  
  handleEdit = (id, event) => {
    event.stopPropagation()
    console.log('edit', id)
  }
  
  handleDelete = (id, event) => {
    console.log('DELETING')
    event.stopPropagation()
    this.props.deletePerson(id)
  }
  
  handleInfoOpen = (id) => {
    this.setState({
      personVisible: true,
      personInfo: this.props.people[id]
    })
  }
  
  handleInfoClose = () => {
    this.setState({
      personVisible: false,
    })
  }

  render() {
    console.log('!!!!!!!!!')
    console.log(this.props.people)
    return (
      <div>
        <Person
          person={this.state.personInfo}
          visible={this.state.personVisible}
          handleClose={this.handleInfoClose}
        />
        <Table
          onCellClick={this.handleInfoOpen}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableHeaderColumn
              tooltip="Идентификационный номер"
              style={{width: '25px'}}
            >ID</TableHeaderColumn>
            <TableHeaderColumn tooltip="Фамилия Имя Отчество">ФИО</TableHeaderColumn>
            <TableHeaderColumn tooltip="Дата Рождения">Дата Рождения</TableHeaderColumn>
            <TableHeaderColumn tooltip="Телефон">Телефон</TableHeaderColumn>
            <TableHeaderColumn style={editButtonStyle} ></TableHeaderColumn>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            showRowHover={true}
            stripedRows={true}
          >
            {this.props.people && this.props.people.map((person, id) => {
              return (
                <TableRow
                  style={{ cursor: 'pointer' }}
                >
                  <TableRowColumn style={{width: '25px'}} >{id+1}</TableRowColumn>
                  <TableRowColumn>{person.name}</TableRowColumn>
                  <TableRowColumn>{person.dob}</TableRowColumn>
                  <TableRowColumn>{person.phone}</TableRowColumn>
                  <TableRowColumn style={editButtonStyle} >
                    <IconButton
                      style={{ left: 0}}
                      touch={true}
                      onClick={this.handleEdit.bind(this, id)}
                    >
                      <ModeEdit color={'#9e9e9e'} />
                    </IconButton>
                    <IconButton
                      style={{ left: 0 }}
                      touch={true}
                      onClick={this.handleDelete.bind(this, id)}
                    >
                      <Delete color={'#9e9e9e'} />
                    </IconButton>
                  </TableRowColumn>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    )
  }
}
