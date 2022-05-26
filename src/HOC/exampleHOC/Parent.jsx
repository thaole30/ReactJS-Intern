import React, { Component } from 'react'
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

class Parent extends Component {
  render() {
    return (
      <div>
          <ClickCounter product='table'/>
          <HoverCounter university="DUT"/>
      </div>
    )
  }
}



export default Parent;