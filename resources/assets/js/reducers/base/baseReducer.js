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
      window.localStorage['menuOpenKey'] = action.payload
      return state.set('openKey', action.payload)

    case SET_SELECTED_KEY:
    window.localStorage['menuSelectKey'] = action.payload
      return state.set('selectedKey', action.payload)

  }
  return state
}