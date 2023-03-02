import React from 'react'

const ChildComponent = () => {
//code here
  return (
    <div id="child">
      Find The Square <br/>
      {props.children}
    </div>
    
  )
};


export default ChildComponent;