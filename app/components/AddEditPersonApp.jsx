import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

export default class AddEditPersonApp extends Component {

  state = {
    personVisible: false,
    personInfo: {},
  }

  action = [
    <FlatButton
      label="Хорошо"
      primary
      onTouchTap={this.props.handleClose}
    />,
  ]

  handleAdd = (person) => {
    this.props.addPerson(person)
  }

  render() {
    return (
      <Dialog
        title={'Добавить Персону'}
        actions={this.action}
        modal={false}
        open={this.props.visible}
        onRequestClose={this.props.handleClose}
      >
        <div>
          <TextField
            hintText="ФИО"
          />
        </div>
      </Dialog>
    )
  }
}

AddEditPersonApp.propTypes = {
  people: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  visible: React.PropTypes.bool.isRequired,
  addPerson: React.PropTypes.func.isRequired,
  editPerson: React.PropTypes.func.isRequired,
  handleClose: React.PropTypes.func.isRequired,
}
