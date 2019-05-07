import React, { Component, Fragment } from 'react'
import Button from './button'

class Count extends Component {

  state = {
    count: null,
    btnClick: false
  }

  handleOnKeyUp = (e) => {
    this.setState({ count: e.target.value })
  }
  handleClick = () => {
    this.setState({ btnClick: true })
  }

  render () {
    return (
      <Fragment>
        <div className='form-group col-sm-4'>
          <label>count</label>
          <input className="form-control" onKeyUp={this.handleOnKeyUp} />
          <button className="btn btn-primary" onClick={this.handleClick}>add button</button>
        </div>



        {
          this.state.btnClick
            ? <Button count={this.state.count}/>
            : null
        }

      </Fragment>

    )
  }
}

export default Count
