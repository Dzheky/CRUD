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
      dispatch(CrudActions.deletePerson(id))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PeopleApp)
