import {
  FETCH_TIMESTAMPS,
  DELETE_TIMESTAMP,
  ADD_ONE_TIMESTAMP
} from "../actions/index"
import { sortDescending, fetchTimeStamps } from "../libs/utils"

const INITIAL_STATE = { timestampData: [] }

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TIMESTAMPS:
      let data = sortDescending(action.payload)
      return { ...state, timestampData: data }
    case DELETE_TIMESTAMP:
      return {
        ...state,
        timestampData: state.timestampData.filter(
          item => item.id !== action.payload
        )
      }
    case ADD_ONE_TIMESTAMP:
      let newItem = fetchTimeStamps(1)
      console.log("New Item added ", newItem)
      return {
        ...state,
        timestampData: sortDescending(state.timestampData.concat(newItem))
      }
    default:
      return state
  }
}
