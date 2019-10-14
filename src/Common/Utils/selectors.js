import { createSelector } from 'reselect'

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

export const getUserReward = createSelector(
  getChallenges,
  (challenges) => {
    const peddingchallenges = challenges.filter(i => i.attributes.complete === false)
    return peddingchallenges.length <= 0
  }
)