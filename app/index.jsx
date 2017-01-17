import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './containers/App.jsx'
import configureStore from './store/configureStore.jsx'

injectTapEventPlugin()

const DEFAULT_STATE = {
  crud: {
    people: [
      {
        name: 'Клименченко Евгений Юрьевич',
        dob: '1992-12-23',
        phone: '+7-777-777-7777',
      },
      {
        name: 'Петров Василий Петрович',
        dob: '1964-12-23',
        phone: '+7-555-555-5555',
      },
      {
        name: 'Дуров Павел Юрьевич',
        dob: '1888-12-13',
        phone: '+7-444-444-4444',
      },
      {
        name: 'Крутой Александр Васильевич',
        dob: '1992-05-23',
        phone: '+7-333-333-3333',
      },
    ],
  },
}

const store = configureStore(DEFAULT_STATE)
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
