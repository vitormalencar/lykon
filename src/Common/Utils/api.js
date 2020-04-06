const BASE_URL = 'https://lykon-api.now.sh'

const getRequest = (path) =>
  fetch(`${BASE_URL}/${path}`).then((res) => res.json())

const putRequest = (path, payload) =>
  fetch(`${BASE_URL}/${path}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then((res) => res.json())

// Mock Http request
export const getChallenges = () => getRequest(`challenges`)
export const getChallenge = (id) => getRequest(`challenges/${id}`)
export const updateChallenge = (id, payload) =>
  putRequest(`challenges/${id}`, payload)

export const getUser = () => getRequest(`user`)
export const updateUser = (payload) => putRequest(`user`, payload)
