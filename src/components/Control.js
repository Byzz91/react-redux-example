import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Control extends Component {
  static propTypes = {
      onPlus: PropTypes.func,
      onSubtract: PropTypes.func,
      onRandomizeColor: PropTypes.func
  }

  static defaultProps = {
    onPlus: Control._fAnonnymouse('onPlus'),
    onSubtract: Control._fAnonnymouse('onPlus'),
    onRandomizeColor: Control._fAnonnymouse('onPlus')
  }

  static _fAnonnymouse(callName) {
      return () => {
          console.warn(callName + ' was not defined')
      }
  }

  render() {
    return (
      <div>
        <button onClick={this.props.onPlus}>+</button>
        <button onClick={this.props.onSubtract}>-</button>
        <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
      </div>
    )
  }
}
