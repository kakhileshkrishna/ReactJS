import React,{useState} from 'react'
import ChildComp from './ChildComp';

const Callback = () => {
    const [name, setName] = useState('');
    const changeHandler = e => {
        setName(e.target.value);
    }

  return (
    <div>
      <center>
        Name: {name} <br />
        <input type='text' onChange={changeHandler} /><br />
        <ChildComp changeHandler={changeHandler} />
      </center>
    </div>
  )
}

export default Callback

