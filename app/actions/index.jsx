import { ADD_PERSON, EDIT_PERSON, DELETE_PERSON } from '../constants/ActionTypes.jsx'

export function addPerson(person) {
  return {
    type: ADD_PERSON,
    person,
  }
}

export function editPerson(person, id) {
  return {
    type: EDIT_PERSON,
    person,
    id,
  }
}

export function deletePerson(id) {
  return {
    type: DELETE_PERSON,
    id,
  }
}
