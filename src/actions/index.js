export const FETCH_TIMESTAMPS = "FETCH_POSTS"
export const DELETE_TIMESTAMP = "DELETE_TIMESTAMP"
export const ADD_ONE_TIMESTAMP = "ADD_ONE_TIMESTAMP"
import { fetchTimeStamps as fetchData } from "../libs/utils"

export function fetchTimeStamps() {
  return {
    type: FETCH_TIMESTAMPS,
    payload: fetchData()
  }
}

export function deleteTimestamp(index) {
  return {
    type: DELETE_TIMESTAMP,
    payload: index
  }
}

export function addOneTimestamp(index) {
  return {
    type: ADD_ONE_TIMESTAMP
  }
}
