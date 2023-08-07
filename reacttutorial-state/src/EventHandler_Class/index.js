import React, { Component } from 'react'

export default class EventHandler_Class extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         changedValue : ''
      }
    }
    
    
    handleCliss=()=>{
        console.log("Clicked");
    }
    handlechange=(e)=>{
        //console.log(e.target.value);
        this.setState({
            changedValue : e.target.value
        },()=>{
            console.log(this.state.changedValue);
        })
        //console.log(this.state.changedValue);
    }
  
    render() {
    return (
      <div>
        <button className='handler' onClick={this.handleCliss}>Click Here</button>
        <input type="text" onChange={this.handlechange} />
        <p>{this.state.changedValue}</p>
      </div>
    )
  }
}
