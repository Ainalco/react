import React, { Component } from 'react';
import HomePage from './HomePage';
import LoginPage from './LoginPage';


class Conditional_rendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin : false
      }
    }
    
    
    render() {
        const {isLoggedin} = this.state
        let element;
        // if(isLoggedin){
        //     element= <HomePage />
        // }else{
        //     element= <LoginPage />
        // }
        //use ternary operator
        element=isLoggedin? <HomePage /> : <LoginPage />
        return (
            <div>
                {element}
            </div>
            
            )
      
    }
  }
  export default Conditional_rendering