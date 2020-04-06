import throttle from 'lodash.throttle'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { fetchUser } from './Modules/Profile/actions/index'
import { fetchChallenges } from './Modules/Challenges/actions/index'
import { loadState, saveState } from './Common/Utils/persistency'

// Preloaded Reducers
import { reducer as challenges } from './Modules/Challenges/index'

const persistedState = loadState()

const createReducer = (reducers) =>
  combineReducers({
    challenges,
    challenge: (state = null) => state,
    ...reducers,
  })

export const registerReducer = (store, name, reducer) => {
  store.async[name] = reducer
  store.replaceReducer(createReducer(store.async))
}

export default (() => {
  const store = createStore(
    createReducer(),
    persistedState,
    composeWithDevTools(applyMiddleware(thunk))
  )
  store.async = {}
  store.subscribe(
    throttle(() => {
      saveState({ ...store.getState() })
    }, 1000)
  )

  // App Bootstrap
  store.dispatch(fetchUser())
  // Corner case
  store.dispatch(fetchChallenges())

  return store
})()
