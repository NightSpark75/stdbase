'use strict'
import Actions from '../../constants/actions'

const {
  SET_OPEN_KEY,
  SET_SELECTED_KEY,
} = Actions

export function setOpenKey(key) {
  return {
    type: SET_OPEN_KEY,
    payload: key,
  }
}

export function setSelectedKey(key) {
  return {
    type: SET_SELECTED_KEY,
    payload: key,
  }
}

