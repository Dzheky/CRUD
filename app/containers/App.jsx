import React, { Component } from 'react'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Crud from './Crud.jsx'

export default class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <MuiThemeProvider>
          <Crud />
        </MuiThemeProvider>
      </Provider>
    )
  }
}
