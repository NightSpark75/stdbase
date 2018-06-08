'use strict'
import Actions from '../../constants/actions'

const {
  SET_APPS,
} = Actions

export function setApps(apps) {
  return {
    type: SET_APPS,
    payload: apps,
  }
}

