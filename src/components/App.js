import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
 const [state, setstate] = useState('');
  const inputValue = (prop) => {
    setstate(prop.target.value);
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
