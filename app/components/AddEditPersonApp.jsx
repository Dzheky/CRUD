import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

const editContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
}

const editBox = {
  padding: '10px',
}

export default class AddEditPersonApp extends Component {

  state = {
    name: '',
    nameError: '',
    date: '',
    dateError: '',
    phone: '',
    address: '',
    city: '',
    id: '',
    edit: false,
    dateColor: '#bababa',
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.update) {
      const person = nextProps.people[nextProps.index]
      this.setState({
        name: person.name,
        date: person.dob,
        phone: person.phone ? person.phone : '',
        address: person.address ? person.address : '',
        city: person.city ? person.city : '',
        id: nextProps.index,
        dateColor: 'black',
        edit: true,
      })
    }
  }

  action = [
    <FlatButton
      label="Закрыть"
      primary
      onTouchTap={() => { this.handleClose() }}
    />,
    <FlatButton
      label="Добавить"
      primary
      onTouchTap={() => { this.handleSubmit() }}
    />,
  ]

  handleClose = () => {
    this.setState({
      name: '',
      nameError: '',
      date: '',
      dateError: '',
      phone: '',
      address: '',
      city: '',
      id: '',
      edit: false,
      dateColor: '#bababa',
    })
    this.props.handleClose()
  }

  handleSubmit = () => {
    let allgood = true
    if (this.state.name === '') {
      allgood = false
      this.setState({
        nameError: 'Это поле обязательно для заполнения',
      })
    }
    if (this.state.date === '') {
      allgood = false
      this.setState({
        dateError: 'Это поле обязательно для заполнения',
      })
    }
    if (allgood) {
      const result = {
        name: this.state.name,
        dob: this.state.date,
      }
      if (this.state.phone !== '') { result.phone = this.state.phone }
      if (this.state.address !== '') { result.address = this.state.address }
      if (this.state.city !== '') { result.city = this.state.city }
      this.state.edit ? this.props.editPerson(result, this.state.id) : this.props.addPerson(result)
      this.handleClose()
    }
  }

  handleNameChange = (event) => {
    let result = event.target.value
    if (result.length > 100) {
      result = this.state.name
      this.setState({
        name: result,
        nameError: 'Не больше 100 символов',
      })
    } else {
      this.setState({
        name: result,
        nameError: '',
      })
    }
  }

  handleDateChange = (event) => {
    const result = event.target.value
    this.setState({
      date: result,
      dateError: '',
    })
  }

  handlePhoneChange = (event) => {
    let result = event.target.value
    let format = '+7 *** ***-**-**'
    result = result.replace('+7', '')
    result = result.replace(/[^0-9.]/g, '')
    result.length > 0 && result.split('').forEach((number) => {
      format = format.replace('*', `${number}`)
    })
    format = format.replace(/(?:\D)+$/g, '')
    if (format.length === 2) {
      format = ''
    }
    this.setState({
      phone: format,
    })
  }

  handleAddressChange = (event) => {
    const result = event.target.value
    this.setState({
      address: result,
    })
  }

  handleCityChange = (event) => {
    const result = event.target.value
    this.setState({
      city: result,
    })
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
        <div style={editContainer}>
          <div style={editBox}>
            <TextField
              value={this.state.name}
              onChange={this.handleNameChange}
              errorText={this.state.nameError}
              floatingLabelText="Фамилия Имя Отчество:"
              hintText="Петров Иван Иванович"
              floatingLabelFixed
            />
          </div>
          <div style={editBox}>
            <TextField
              onFocus={() => {
                this.setState({
                  dateColor: 'black',
                })
              }}
              onBlur={() => {
                if (!this.state.date) {
                  this.setState({
                    dateColor: '#bababa',
                  })
                }
              }}
              value={this.state.date}
              onChange={this.handleDateChange}
              inputStyle={{ color: this.state.dateColor }}
              errorText={this.state.dateError}
              type="date"
              floatingLabelText="Дата Рождения:"
              floatingLabelFixed
            />
          </div>
          <div style={editBox}>
            <TextField
              value={this.state.phone}
              type="tel"
              onChange={this.handlePhoneChange}
              floatingLabelText="Телефон:"
              hintText="+7 777 777 77 77"
              floatingLabelFixed
            />
          </div>
          <div style={editBox}>
            <TextField
              value={this.state.address}
              onChange={this.handleAddressChange}
              floatingLabelText="Адресс:"
              hintText="ул. Ленина 1б"
              floatingLabelFixed
            />
          </div>
          <div style={editBox}>
            <TextField
              value={this.state.city}
              onChange={this.handleCityChange}
              floatingLabelText="Город:"
              hintText="Москва"
              floatingLabelFixed
            />
          </div>
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
