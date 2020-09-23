import {UPDATEDONE} from './stateUpdateTypes';

const initialState = false;

const stateUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATEDONE:
      return !state
    default:
      return state
  }
}

export default stateUpdateReducer;