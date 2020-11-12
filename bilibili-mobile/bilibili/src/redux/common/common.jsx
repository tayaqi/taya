import * as types from './action-types'

export default function changeTabSelecte (selectItem) {
  return {
    type: types.CHANGE_TAB_SELECTED,
    payload: selectItem
  }
}