import React from 'react'

const ChildComp = (props) => {
  return (
    <div>
      <center>
        <input type="text" onChange={props.changeHandler} />
      </center>
    </div>
  )
}

export default ChildComp
