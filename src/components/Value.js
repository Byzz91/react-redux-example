import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Value extends Component {
  static propTypes = {
    value: PropTypes.number
  }

  static defaultProps = {
      value: -1
  }

  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>
      </div>
    )
  }
}
