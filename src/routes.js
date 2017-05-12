import React from "react"
import { Route, IndexRoute } from "react-router"

import App from "./components/app"
import TimestampList from "./components/timestamp_list"

export default (
  <Route path="/" component={App}>
    <IndexRoute component={TimestampList} />
  </Route>
)
