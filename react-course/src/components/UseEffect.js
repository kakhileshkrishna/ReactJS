import React, {useEffect, useState} from 'react'

function UseEffect() {
    const [count, setCount]= useState(0);
    useEffect(()=> console.log("Clicked"+ count, [count]))

    return (
    <div>
      <h1 onClick={() => setCount(count-1)}>Now it's {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
  )
}

export default UseEffect