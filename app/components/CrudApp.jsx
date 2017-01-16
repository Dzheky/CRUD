import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import People from '../containers/People.jsx'

const flaotingButtonStyle = {
    position: 'absolute',
    right: '10px',
    bottom: '10px',
  }

export default class CrudApp extends Component {
  render() {
    return (
      <div>
        <AppBar 
          title="CRUD"
          showMenuIconButton={false}
          iconElementRight={<FlatButton label="Добавить" />}
        />
        <People />
        <FloatingActionButton style={flaotingButtonStyle} >
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }
}
