'use strict'
import InitialState from './baseInitialState'
import Actions from '../../constants/actions'

const {
  SET_OPEN_KEY,
  SET_SELECTED_KEY,
} = Actions

const initialState = new InitialState()

export default function updateReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state)

  switch (action.type) {
    case SET_OPEN_KEY:
      return state.set('openKey', action.payload)

    case SET_SELECTED_KEY:
      return state.set('selectedKey', action.payload)

  }
  return state
}