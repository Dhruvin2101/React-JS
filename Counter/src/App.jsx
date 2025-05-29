import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(7)

  const addValue = () =>{
    setCounter(counter + 1)
  }

  const removeValue = () =>{
    if(counter <= 0){
      setCounter(counter = 0)
    }  
    
    else{
      setCounter(counter - 1)
    }
    
      }

  return (
    <>
      <h1>Minimal Counter</h1>
      <h2>Counter Value: {counter} </h2>

      <button onClick={addValue}> Add Value</button>
      &nbsp; &nbsp; &nbsp;
      <button onClick={removeValue} >Remove Value</button>

    </>
  )
}

export default App
