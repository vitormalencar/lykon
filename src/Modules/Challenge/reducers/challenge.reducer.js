// @flow
import { createSelector } from 'reselect'
import {
  FETCH_CHALLENGE_REQUEST,
  FETCH_CHALLENGE_SUCCESS,
  UPDATE_CHALLENGE_REQUEST,
  UPDATE_CHALLENGE_SUCCESS,
} from '../actions/index'

// Root Selector
export const getRoot = (state) => state

export const getChallenge = createSelector(
  getRoot,
  ({ challenge }) => challenge || {}
)

export const getLoadingState = createSelector(
  getChallenge,
  ({ loading }) => loading || false
)

export const getCurrentChallenge = createSelector(
  getChallenge,
  ({ currentChallenge }) => currentChallenge || {}
)

const initialState = {
  loading: true,
  currentChallenge: {
    type: '',
    id: '',
    complete: false,
    attributes: {
      title: '',
      group: '',
      introduction: '',
      extra: {
        url: '',
        image: '',
      },
      points: 0,
      tags: [],
    },
  },
}

const challengeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHALLENGE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_CHALLENGE_SUCCESS:
      return {
        ...state,
        currentChallenge: action.payload,
        loading: false,
      }

    case UPDATE_CHALLENGE_REQUEST:
      return {
        ...state,
        currentChallenge: {
          ...state.currentChallenge,
          attributes: {
            ...state.currentChallenge.attributes,
            complete: true,
          },
        },
      }

    case UPDATE_CHALLENGE_SUCCESS:
      return {
        ...state,
        currentChallenge: {
          ...action.payload,
        },
      }
    default:
      return state
  }
}

export default challengeReducer
