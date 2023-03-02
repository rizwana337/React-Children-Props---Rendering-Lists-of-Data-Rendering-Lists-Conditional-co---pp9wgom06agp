import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
 //code here
 const [value, setValue] = useState('');
  const onChangeHandler = (prop) => {
    setValue(prop.target.value);
  }
  return (
    <div id="main">
      <ChildComponent > 
       
      <input id="input" onChange={onChangeHandler} />
</ChildComponent>
      <p id="output">{Number(value)*Number(value)}</p>
    </div>
  )
}


export default App;
