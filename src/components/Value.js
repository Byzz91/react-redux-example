import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Value extends Component {
  static propTypes = {
    number: PropTypes.number
  }

  static defaultProps = {
      number: -1
  }

  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    )
  }
}
