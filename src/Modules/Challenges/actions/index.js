import { getChallenges } from '../../../Common/Utils/api'

export const FETCH_CHALLENGES_REQUEST = 'FETCH_CHALLENGES_REQUEST'
export const FETCH_CHALLENGES_SUCCESS = 'FETCH_CHALLENGES_SUCCESS'

export const fetchChallengesRequest = () => ({ type: FETCH_CHALLENGES_REQUEST })
export const fetchChallengesSuccess = payload => ({ type: FETCH_CHALLENGES_SUCCESS, payload })

// Thunks
export const fetchChallenges = () => async dispatch => {
  dispatch(fetchChallengesRequest())
  try {
    const response = await getChallenges()
    dispatch(fetchChallengesSuccess(response))
  } catch (error) {
    console.log(error)
  }
}