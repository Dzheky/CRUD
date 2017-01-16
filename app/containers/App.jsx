import React, { Component } from 'react'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import CrudApp from '../components/CrudApp.jsx'

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={this.props.store}>
            <CrudApp />
        </Provider>
      </MuiThemeProvider>
    )
  }
}
