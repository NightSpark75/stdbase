'use strict'
import Actions from '../../constants/actions'

const {
  SET_KEY,
  SET_PAGE,
} = Actions

export function setKey(key) {
  return {
    type: SET_KEY,
    payload: key,
  }
}

export function setPage(page) {
  return {
    type: SET_PAGE,
    payload: page,
  }
}

