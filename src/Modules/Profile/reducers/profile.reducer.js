// @flow
import { createSelector } from 'reselect'
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  UPDATE_USER_POINTS_REQUEST,
  UPDATE_USER_POINTS_SUCCESS,
} from '../actions/index'


// Root Selector
export const getRoot = (state) => state

export const getProfile = createSelector(
  getRoot,
  ({ profile }) => profile || {}
)

export const getLoadingState = createSelector(
  getProfile,
  ({ loading }) => loading || false
)

export const getCurrentUser = createSelector(
  getProfile,
  ({ currentUser }) => currentUser || null
)

const initialState = {}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loading: false
      }
    case UPDATE_USER_POINTS_REQUEST:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          attributes: {
            ...state.currentUser.attributes,
            points: state.currentUser.attributes.points + action.payload.points
          }
        }
      }

    case UPDATE_USER_POINTS_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}


export default profileReducer