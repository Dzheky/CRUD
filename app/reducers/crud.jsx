import {
 ADD_PERSON,
 DELETE_PERSON,
 EDIT_PERSON,
} from '../constants/ActionTypes.jsx'

function edit(state = {}, action) {
  switch (action.type) {
    case ADD_PERSON:
      return state
    case DELETE_PERSON:
      let newState = Object.assign([], state)
      newState.splice(action.id, 1)
      return newState
    case EDIT_PERSON:
      console.log('ddddd')
      return state
    default:
      return state
  }
}

export default function root(state = {}, action) {
  switch(action.type){
    case ADD_PERSON:
    case DELETE_PERSON:
    case EDIT_PERSON:
      return Object.assign({}, state, {
        people: edit(state.people, action)
      })
    default:
      return state
  }
}