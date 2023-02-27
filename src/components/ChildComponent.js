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
     <input id="input" onChange={onChangeHandler} />

      <p id="output">{Math.sqrt(value)}</p>
    </div>
  )
}


export default ChildComponent;