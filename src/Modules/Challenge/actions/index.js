import { getChallenge, updateChallenge } from '../../../Common/Utils/api'
import { getChallengeById } from '../../Challenges/reducers/challenges.reducer'
import { getCurrentChallenge } from '../reducers/challenge.reducer'

export const FETCH_CHALLENGE_REQUEST = 'FETCH_CHALLENGE_REQUEST'
export const FETCH_CHALLENGE_SUCCESS = 'FETCH_CHALLENGE_SUCCESS'

export const UPDATE_CHALLENGE_REQUEST = 'UPDATE_CHALLENGE_REQUEST'
export const UPDATE_CHALLENGE_SUCCESS = 'UPDATE_CHALLENGE_SUCCESS'

export const fetchChallengeRequest = () => ({ type: FETCH_CHALLENGE_REQUEST })
export const fetchChallengeSuccess = (payload) => ({
  type: FETCH_CHALLENGE_SUCCESS,
  payload,
})

export const updateChallengeRequest = () => ({ type: UPDATE_CHALLENGE_REQUEST })
export const updateChallengeSuccess = (payload) => ({
  type: UPDATE_CHALLENGE_SUCCESS,
  payload,
})

// Thunks
export const fetchChallenge = (id) => async (dispatch, getState) => {
  dispatch(fetchChallengeRequest())
  const state = getState() // Try to update using the current store for Offiline experience
  const Localresponse = getChallengeById(id)(state)
  dispatch(fetchChallengeSuccess(Localresponse))
  try {
    const response = await getChallenge(id) // update in the background using the api response
    dispatch(fetchChallengeSuccess(response))
  } catch (error) {
    console.log(error)
  }
}

export const compleateChallenge = (id) => async (dispatch, getState) => {
  dispatch(updateChallengeRequest())
  const state = getState()
  const challenge = getCurrentChallenge(state)
  try {
    const response = await updateChallenge(id, challenge)
    dispatch(updateChallengeSuccess(response))
  } catch (error) {
    console.log(error)
  }
}
