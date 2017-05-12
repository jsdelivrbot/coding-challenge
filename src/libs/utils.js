import generateData from "./generateData"
import { merge, sortBy, forEach } from "lodash"

const customConfig = {
  count: 400,
  end: new Date("January 26, 2017 23:59:59"),
  start: new Date("January 15, 2017 00:00:00")
}

export function fetchTimeStamps(count = 400) {
  const config = merge({}, customConfig, { count })
  return forEach(generateData(config), item => {
    item.id = item.timestamp.toString() + item.description
  })
}

export function sortDescending(array) {
  return sortBy(array, "timestamp", item => {
    return new Date(item)
  }).reverse()
}
