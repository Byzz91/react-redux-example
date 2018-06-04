import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Control from './Control'
import Value from './Value'

export default class componentName extends Component {
  // static propTypes = {}
  // static defaultProps = {}

  render() {
    return (
      <div>
        <Value />
        <Control />
      </div>
    )
  }
}
