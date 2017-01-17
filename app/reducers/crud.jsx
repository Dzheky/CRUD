import {
 ADD_PERSON,
 DELETE_PERSON,
 EDIT_PERSON,
} from '../constants/ActionTypes.jsx'

function edit(state = {}, action) {
  switch (action.type) {
    case ADD_PERSON:
      let addPersonState = Object.assign([], state)
      addPersonState.push(action.person)
      return addPersonState
    case DELETE_PERSON:
      let deletePersonState = Object.assign([], state)
      deletePersonState.splice(action.id, 1)
      return deletePersonState
    case EDIT_PERSON:
      let editPersonState = Object.assign([], state)
      editPersonState[action.id] = action.person
      return editPersonState
    default:
      return state
  }
}

export default function root(state = {}, action) {
  switch (action.type) {
    case ADD_PERSON:
    case DELETE_PERSON:
    case EDIT_PERSON:
      return Object.assign({}, state, {
        people: edit(state.people, action),
      })
    default:
      return state
  }
}
