'use strict'
import InitialState from './baseInitialState'
import Actions from '../../constants/actions'


const {
  SET_APPS,
} = Actions

const initialState = new InitialState()

export default function updateReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state)

  switch (action.type) {
    case SET_APPS:
      return state.set('apps', action.payload)

  }
  return state
}