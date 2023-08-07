import React, { Component } from 'react'

export default class HooksUsestate extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count : 0
    }
  }
  handleIncreent=()=>{
    this.setState({
        count : this.state.count + 1
    })
  }
  
    render() {
        const {count} = this.state
    return (        
      <div>
        <h1>{count}</h1>
        <button className='handler' onClick={this.handleIncreent}>Increment</button>
      </div>
    )
  }
}
