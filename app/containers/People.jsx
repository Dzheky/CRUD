import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PeopleApp from '../components/PeopleApp.jsx'
import * as CrudActions from '../actions/index.jsx'

const mapStateToProps = (state) => {
  return {
    people: state.crud.people,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePerson: (id) => {
      console.log('here')
      dispatch(CrudActions.deletePerson(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleApp)