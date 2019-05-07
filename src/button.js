import React, { Component } from 'react'

class Button extends Component {
  showButtons = () => {
    const buttons = []
    for (let i = 0; i < this.props.count; i++) {
      buttons.push(<button key={i}>{i}</button>)
    }

    return buttons
  }

  render () {
    return (

      <div>
          {this.showButtons()}
      </div>

    )

  }
}

export default Button