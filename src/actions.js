import { CHANGE_SEARCHFIELD } from './constants'
import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants'

export const setSearchField = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
})

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING })
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(robots => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: robots }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}