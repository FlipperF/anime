import {TOGGLE_POPUP_STATE} from '../Actions/ui'

export const initionalState = {
    isVisiblePopup: false

}

function uiReducer(state = initionalState, action) {
    switch (action.type) {
      case TOGGLE_POPUP_STATE:
        return {...state, isVisiblePopup: !state.isVisiblePopup}
      default:
        return state
    }
  }

  export default uiReducer