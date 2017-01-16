import React from 'react'

import People from '../containers/People.jsx'

const flaotingButtonStyle = {
  position: 'absolute',
  right: '10px',
  bottom: '10px',
}
const CrudApp = () =>
  <div>
    <People />
  </div>

export { CrudApp as default }
