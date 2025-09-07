import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter,setCounter] = useState(5)

  // let Counter = 20

  const addValue = () =>{
      // console.log("value added",Math.random());
      // console.log("clicked",Counter);
      //Counter = Counter+1

      if(Counter<20){
        setCounter(Counter+1)
      }
  }

  const removeValue = () =>{
    if(Counter>=1){
      setCounter(Counter-1)
    }
  }

  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter Value : {Counter}</h2>

      <button 
        onClick={addValue}
      >Add Value</button>
      <br />
      <button
        onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
