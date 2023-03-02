import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
 //code here
 const [state, setState] = useState('');
  const inputValue = (prop) => {
    setState(prop.target.value);
  }
  return (
    <div id="main">
      <ChildComponent > 
       
      <input id="input" onChange={inputValue} />
</ChildComponent>
      <p id="output">{Number(state)*Number(state)}</p>
    </div>
  )
}


export default App;
