import React, {useState, useEffect, useMemo} from 'react'

const Memo_Effect = () => {
  const [effect, setEffect] = useState(0);
  const [memo, setMemo] = useState(0);

  // After rendering
  useEffect(()=>{console.log('from useEffect')},[effect])

  // During Rendering
  useMemo(()=> console.log('from useMemo '+ memo),[memo])



  return (
    <div>
      <center>
        UseEffect value : {effect}<br />
        <button onClick={()=> setEffect(effect+1)}>useEffect Increment</button><br/>
        UseMemo Value: {memo} <br/>
        <button onClick={() => setMemo(memo+1)}>useMemo Increment</button><br/>
      </center>
    </div>
  )
}

export default Memo_Effect
