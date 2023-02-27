import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
 //code here
 const [value, setValue] = useState(0);
 const onChangeHandler = (e) => {
   setValue(e.target.value);
 };
  return (
    <div id="main">
      <ChildComponent /> 
      <input id="input" onChange={onChangeHandler} />

<p id="output">{Math.sqrt(value)}</p>
    </div>
  )
}


export default App;
