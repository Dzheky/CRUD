import React, { Component } from 'react'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import CrudApp from '../components/CrudApp.jsx'

const App = props =>
  <MuiThemeProvider>
    <Provider store={props.store}>
      <CrudApp />
    </Provider>
  </MuiThemeProvider>

export { App as default }
