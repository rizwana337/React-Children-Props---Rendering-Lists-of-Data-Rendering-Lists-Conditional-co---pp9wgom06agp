import React from 'react'

const ChildComponent = () => {
  const [value, setValue] = useState(0);
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };
//code here
  return (
    <div id="child">
      Find The Square <br/>
      
    </div>
    
  )
}


export default ChildComponent;