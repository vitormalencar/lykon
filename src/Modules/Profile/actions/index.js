import { getUser, updateUser } from '../../../Common/Utils/api'
import { getCurrentUser } from '../reducers/profile.reducer'

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'

export const UPDATE_USER_POINTS_REQUEST = 'UPDATE_USER_POINTS_REQUEST'
export const UPDATE_USER_POINTS_SUCCESS = 'UPDATE_USER_POINTS_SUCCESS'


export const fetchUserRequest = () => ({ type: FETCH_USER_REQUEST })
export const fetchUserSuccess = payload => ({ type: FETCH_USER_SUCCESS, payload })

export const updateUserRequest = payload => ({ type: UPDATE_USER_POINTS_REQUEST, payload })
export const updateUserSuccess = payload => ({ type: UPDATE_USER_POINTS_SUCCESS, payload })

// Thunks
export const fetchUser = () => async dispatch => {
  dispatch(fetchUserRequest())
  try {
    const response = await getUser()
    dispatch(fetchUserSuccess(response))
  } catch (error) {
    console.log(error)
  }
}

// Thunks
export const updateCurrentUser = (points) => async (dispatch, getState) => {
  dispatch(updateUserRequest(points))
  const state = getState()
  const user = getCurrentUser(state)
  try {
    const response = await updateUser(user)
    dispatch(fetchUserSuccess(response))
  } catch (error) {
    console.log(error)
  }
}