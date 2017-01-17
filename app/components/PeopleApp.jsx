import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import Delete from 'material-ui/svg-icons/action/delete'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

import Person from './Person.jsx'
import AddEditPerson from '../containers/AddEditPerson.jsx'

const editButtonStyle = {
  width: '70px',
  paddingLeft: '0px',
}

const flaotingButtonStyle = {
  position: 'absolute',
  right: '10px',
  bottom: '10px',
}

export default class PeopleApp extends Component {

  state = {
    personVisible: false,
    addEditVisible: false,
    addEditId: '',
    addEditUpdate: false,
    personInfo: {},
  }

  handleEdit = (id, event) => {
    event.stopPropagation()
    this.setState({
      addEditVisible: true,
      addEditId: id,
      addEditUpdate: true,
    })
  }

  handleDelete = (id, event) => {
    event.stopPropagation()
    this.props.deletePerson(id)
  }

  handleInfoOpen = (id) => {
    this.setState({
      personVisible: true,
      personInfo: this.props.people[id],
    })
  }

  handleInfoClose = () => {
    this.setState({
      personVisible: false,
    })
  }

  handleAddEditOpen = () => {
    this.setState({
      addEditVisible: true,
    })
  }

  handleAddEditClose = () => {
    this.setState({
      addEditVisible: false,
      addEditId: '',
      addEditUpdate: false,
    })
  }


  render() {
    return (
      <div>
        <AppBar
          title="CRUD"
          showMenuIconButton={false}
          iconElementRight={
            <FlatButton
              label="Добавить"
              onClick={this.handleAddEditOpen}
            />
          }
        />
        <Person
          person={this.state.personInfo}
          visible={this.state.personVisible}
          handleClose={this.handleInfoClose}
        />
        <AddEditPerson
          index={this.state.addEditId}
          update={this.state.addEditUpdate}
          handleClose={this.handleAddEditClose}
          visible={this.state.addEditVisible}
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
              style={{ width: '25px' }}
            >ID</TableHeaderColumn>
            <TableHeaderColumn tooltip="Фамилия Имя Отчество">ФИО</TableHeaderColumn>
            <TableHeaderColumn tooltip="Дата Рождения">Дата Рождения</TableHeaderColumn>
            <TableHeaderColumn tooltip="Телефон">Телефон</TableHeaderColumn>
            <TableHeaderColumn style={editButtonStyle} />
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            showRowHover
            stripedRows
          >
            {this.props.people && this.props.people.map((person, id) => {
              return (
                <TableRow
                  style={{ cursor: 'pointer' }}
                >
                  <TableRowColumn style={{ width: '25px' }} >{ id + 1 }</TableRowColumn>
                  <TableRowColumn>{person.name}</TableRowColumn>
                  <TableRowColumn>{person.dob}</TableRowColumn>
                  <TableRowColumn>{person.phone}</TableRowColumn>
                  <TableRowColumn style={editButtonStyle} >
                    <IconButton
                      style={{ left: 0 }}
                      touch
                      onClick={this.handleEdit.bind(this, id)}
                    >
                      <ModeEdit color={'#9e9e9e'} />
                    </IconButton>
                    <IconButton
                      style={{ left: 0 }}
                      touch
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
        <FloatingActionButton
          style={flaotingButtonStyle}
          onClick={this.handleAddEditOpen}
        >
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }
}

PeopleApp.propTypes = {
  people: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  deletePerson: React.PropTypes.func.isRequired,
}
