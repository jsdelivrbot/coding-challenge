import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {
  fetchTimeStamps,
  deleteTimestamp,
  addOneTimestamp
} from "../actions/index"

class TimestampList extends Component {
  componentWillMount() {
    this.props.fetchTimeStamps()
  }

  renderPosts() {
    return this.props.timestampList.map(item => {
      return (
        <li className="row list-group-item" key={item.id}>
          <div className="col-md-4">
            {item.description}
          </div>
          <div className="col-md-6">{item.timestamp.toString()}</div>
          <button
            type="button"
            className="col-md-2 btn btn-danger"
            onClick={this.props.deleteTimestamp.bind(null, item.id)}
          >
            Delete
          </button>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <h3>Data</h3>
        <div className="card box">
          <ul className="container">
            {this.renderPosts()}
          </ul>
        </div>
        <div className="btn-toolbar">
          <button
            type="button"
            className="btn btn-info"
            onClick={this.props.fetchTimeStamps.bind()}
          >
            Add New 400 items
          </button>
          <button
            type="button"
            className="btn btn-info"
            onClick={this.props.addOneTimestamp.bind()}
          >
            Add 1 item
          </button>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchTimeStamps, deleteTimestamp, addOneTimestamp },
    dispatch
  )
}

function mapStateToProps(state) {
  return { timestampList: state.timestampData }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimestampList)
