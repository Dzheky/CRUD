import {
 ADD_PERSON,
 DELETE_PERSON,
 EDIT_PERSON,
} from '../constants/ActionTypes.jsx'

const DEFAULT_STATE = {
  people: [
    {
      name: 'Клименченко Евгений Юрьевич',
      dob: '23 Декабря 1992',
      phone: '+7-777-777-7777',
    },
    {
      name: 'Петров Василий Петрович',
      dob: '24 Декабря 1962',
      phone: '+7-555-555-5555',
    },
    {
      name: 'Дуров Павел Юрьевич',
      dob: '23 Декабря 1992',
      phone: '+7-444-444-4444',
    },
    {
      name: 'Крутой Александр Васильевич',
      dob: '23 Декабря 1992',
      phone: '+7-333-333-3333',
    },
  ],
}

export default function counter(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_PERSON:
      return state
    case DELETE_PERSON:
      return state
    case EDIT_PERSON:
      return state
    default:
      return state
  }
}
