import { SET_ORDER, SET_COL } from './visionMenuTypes';

export const setOrder = (info) => {
  return {
    type: SET_ORDER,
    payload: info
  }
}

export const setCol = (info) => {
  return {
    type: SET_COL,
    payload: info
  }
}
