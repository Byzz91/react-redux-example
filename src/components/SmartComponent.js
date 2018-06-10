import React, { Component } from 'react'
import Control from './Control'
import Value from './Value'

import { connect } from 'react-redux'
import * as actions from '../actions'

const mapStateToProps = (state) => {
  return {
    number: state.counter.number,
    color: state.ui.color
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: () => { dispatch(actions.increment()) },
    handleDecrement: () => { dispatch(actions.decrement()) },
    handleSetColor: (color) => { dispatch(actions.setColor(color))}
  }
}

class SmartComponent extends Component {
  constructor(props) {
    super(props)
    this.setRandomColor = this.setRandomColor.bind(this)
  }

  setRandomColor() {
    let randomizeColor = [
      Math.floor( (Math.random() * 50) + 200 ),
      Math.floor( (Math.random() * 50) + 200 ),
      Math.floor( (Math.random() * 50) + 200 )  
    ]

    this.props.handleSetColor(randomizeColor)
  }

  render() {
    return (
      <div>
        <Value number={this.props.number} />
        <Control
          onPlus={this.props.handleIncrement}
          onSubtract={this.props.handleDecrement}
          onRandomizeColor={this.props.setRandomColor}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SmartComponent)