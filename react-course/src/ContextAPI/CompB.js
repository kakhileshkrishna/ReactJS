import React, {useContext} from 'react'
import {store} from './contextAPI'

const CompB = () => {
    const [data, setData] = useContext(store)

  return (
    <div>
      Component B - {data}
    </div>
  )
}

export default CompB
