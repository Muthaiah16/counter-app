import React ,{useState} from 'react'
import Button from './components/button'
import './App.css'

function App() {
  const [count,setCount]=useState(0)
  const uptateCount=sign=>{
     let c =count
     if(sign ==="+") setCount(c+1)
     else if(sign ==="-" )setCount(c-1)
     else if(sign ==="Reset")setCount(c=0)
  }
  return (
  <div>
    <h1 className='heading'>Simple Counder App</h1>
    <div  className='app'>
      <div className='item1'>
      <Button sign = "+" updateCount={ uptateCount}/>
      <div className='count'>{count}</div>
      <Button sign = "-"  updateCount={ uptateCount}/> 
       
      </div>
      <div className='item2'>
       <Button sign = "Reset" updateCount={ uptateCount} />
      </div>
    </div></div>
  )
}

export default App



