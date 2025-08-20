import {useState} from 'react';
import './App.css';
import ChildComponent from './example/ChildComponent';


function App() {
  const[parentState, setParentState]=useState("초기값");
  const handleChangeFromParent=(dataFromChild)=>{
    console.log(dataFromChild);
    setParentState(dataFromChild);
  }
  return (
    <>
    <h1>부모의 상태값 : {parentsState}</h1>
    <ChildComponent onChange={handleChangeFromParent}/>
  </>
  );
}

export default App;
