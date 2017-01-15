import { ADD_PERSON, EDIT_PERSON, DELETE_PERSON } from '../constants/ActionTypes.jsx'

export function addPerson(text) {
  return {
    type: ADD_PERSON,
    text,
  }
}

export function editPerson(text, id) {
  return {
    type: EDIT_PERSON,
    text,
    id,
  }
}

export function deletePerson(id) {
  return {
    type: DELETE_PERSON,
    id,
  }
}
