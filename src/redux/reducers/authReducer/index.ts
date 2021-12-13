import { ActionTypes } from '../../constants'
import { initialState } from './initialState'
import { Action } from './types'

export const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.AUTHENTICATE:
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.AUTHENTICATE_SUCCESS:
      return {
        ...state,
        loading: false,
        sessionKey: action.payload?.sessionKey,
        login: action.payload?.login,
        subLogin: action.payload?.subLogin,
      }
    case ActionTypes.AUTHENTICATE_FAILURE:
      return {
        ...state,
        sessionKey: null,
        login: null,
        subLogin: null,
      }
    case ActionTypes.LOGOUT:
      return {
        ...state,
        loading: false,
        sessionKey: null,
      }
    default:
      return { ...state }
  }
}
