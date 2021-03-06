import {GET_STATES} from './taskStatesTypes';

const initialState = [{}];

const taskStatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATES:
      return action.payload
    default:
      return state
  }
}

export default taskStatesReducer;