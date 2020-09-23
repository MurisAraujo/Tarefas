import { SET_ORDER, SET_COL } from './visionMenuTypes'

const initialState = {
  col: 'priority',
  order: 'desc'
}

const visionMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER:
      return {
        ...state,
        order: action.payload
      }

    case SET_COL:
      return {
        ...state,
        col: action.payload
      } 
    default:
      return state
  }
}

export default visionMenuReducer;