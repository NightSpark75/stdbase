'use strict'
import InitialState from './baseInitialState'
import Actions from '../../constants/actions'
//import { pages } from '../../pages'

const {
  SET_KEY,
  SET_PAGE,
} = Actions

const initialState = new InitialState()

export default function updateReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state)

  switch (action.type) {
    case SET_KEY:
      return state.set('key', action.payload)

    case SET_PAGE:
      return state.set('page', action.payload.page)
                  .set('title', action.payload.title)
  }
  return state
}