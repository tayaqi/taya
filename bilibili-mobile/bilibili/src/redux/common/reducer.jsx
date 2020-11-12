import * as types from './action-types'

const initialState = {
  selectItem: "Home"
}

const handle = {
  [types.CHANGE_TAB_SELECTED]: (state, action) => {
    return {
      ...state,
      selectItem: action.payload
    }
  }
}

const commonReducer = (state = initialState, action) => {
  if (handle.hasOwnProperty(action.type)) {
    return handle[action.type](state, action)
  } else {
    return state
  }
}

export default commonReducer