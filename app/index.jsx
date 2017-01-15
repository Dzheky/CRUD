import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './containers/App.jsx'
import configureStore from './store/configureStore.jsx'

injectTapEventPlugin()

const store = configureStore()
render(
  <AppContainer>
    <App
      store={store}
    />
  </AppContainer>,
  document.getElementById('root'),
)

if (module.hot) {
  module.hot.accept('./containers/App.jsx', () => {
    const AppHot = require('./containers/App.jsx').default
    render(
      <AppContainer>
        <AppHot
          store={store}
        />
      </AppContainer>,
      document.getElementById('root'),
    )
  })
}
