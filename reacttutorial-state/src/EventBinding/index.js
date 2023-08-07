import React, { Component } from 'react'

export default class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
      this.handleClick=this.handleClick.bind(this)
    }
    //es6 way
    // handleClick=()=>{
    //    this.setState({
    //     count : this.state.count+1
    //    })
    // }
    //normal javascript
    handleClick(){
        this.setState({
             count : this.state.count+1
           })
    }
    
  render() {
    return (
      <div>
       <h1>{this.state.count}</h1>
       {/* <button className='handler' onClick={this.handleClick.bind(this)}>Increse</button> */}
       {/*constructor bind*/}
       <button className='handler' onClick={this.handleClick}>Increse</button>
      </div>
    )
  }
}
