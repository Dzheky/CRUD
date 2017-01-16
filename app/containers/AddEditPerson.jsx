import { connect } from 'react-redux'
import AddEditPersonApp from '../components/AddEditPersonApp.jsx'
import * as CrudActions from '../actions/index.jsx'

function mapStateToProps(state) {
  return {
    people: state.crud.people,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPerson: (person) => {
      dispatch(CrudActions.addPerson(person))
    },
    editPerson: (person, id) => {
      dispatch(CrudActions.editPerson(person, id))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddEditPersonApp)
