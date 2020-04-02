import { createSelector } from 'reselect'

import { FETCH_CHALLENGES_REQUEST, FETCH_CHALLENGES_SUCCESS } from '../actions/index'



// Root Selector
export const getRoot = (state) => state

export const getChallenge = createSelector(
  getRoot,
  ({ challenges }) => challenges || {}
)

export const getChallenges = createSelector(
  getChallenge,
  ({ myChallenges }) => myChallenges || []
)

export const getChallengeById = id => createSelector(
  getChallenges,
  (myChallenges) => myChallenges.find((item) => item.id === id) || []
)


const initialState = {
  loading: false,
  myChallenges: []
}

const challengesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHALLENGES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_CHALLENGES_SUCCESS:
      return {
        ...state,
        myChallenges: action.payload,
        loading: false
      }
    default:
      return state
  }
}


export default challengesReducer