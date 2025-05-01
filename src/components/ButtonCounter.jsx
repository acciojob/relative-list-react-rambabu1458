import React, { useState } from 'react'

const ButtonCounter = () => {
    const [increment,setIncrement]= useState(0);
    const handleClick = () => {
        setIncrement((prevCount => prevCount + 1));
      };
  return (
    <div>
        <h2>Button Counter</h2>
        <h4>Button Clicked {increment} {increment === 1 ? 'time' : 'times'}</h4>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default ButtonCounter