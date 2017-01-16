import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

const spanStyle = {
  color: 'black',
}

const infoContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
}

const infoBox = {
  padding: '25px',
}

const Person = (props) => {
  const action = [
    <FlatButton
      label="Хорошо"
      primary
      onTouchTap={props.handleClose}
    />,
  ]
  return (
    <Dialog
      title={props.person.name}
      actions={action}
      modal={false}
      open={props.visible}
      onRequestClose={props.handleClose}
    >
      <div style={infoContainer}>
        <div style={infoBox}>
          <div>Дата Рождения:</div>
          <div style={spanStyle}>{props.person.dob}</div>
        </div>
        {(() => {
          let result = []
          if (props.person.phone) {
            result.push(
              <div style={infoBox}>
                <duv>Телефон:</duv>
                <div style={spanStyle}>{props.person.phone}</div>
              </div>,
            )
          }
          if (props.person.address) {
            result.push(
              <div style={infoBox}>
                <duv>Адресс:</duv>
                <div style={spanStyle}>{props.person.address}</div>
              </div>,
            )
          }
          if (props.person.city) {
            result.push(
              <div style={infoBox}>
                <duv>Город:</duv>
                <div style={spanStyle}>{props.person.city}</div>
              </div>,
            )
          }
          return result
        })()}
      </div>
    </Dialog>
  )
}

export { Person as default }
