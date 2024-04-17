import React from 'react'
import './btn.css'


function button({sign,updateCount}) 
{
  const clickHandler=sigh=>{
    updateCount(sign)
  }

  return <button className={
    sign === "+" ? "plus" :
    sign === "-" ? "minus":
    sign === "Reset" ? "reset" :""
  }onClick={()=> clickHandler
    (sign)}>{sign}
  </button>
    
  
}

export default button
