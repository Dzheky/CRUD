import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CrudApp from '../components/CrudApp.jsx'
import * as CrudActions from '../actions/index.jsx'

class Crud extends Component {
  render() {
    return (
      <CrudApp
        people={this.props.people}
        {...bindActionCreators(CrudActions, this.props.dispatch)}
      />
    )
  }
}

function select(state) {
  return {
    people: state.crud.people,
  }
}

export default connect(select)(Crud)
