import React, {useContext} from 'react'
import {store} from './contextAPI'

const CompA = () => {
    const [data, setData] = useContext(store)

  return (
    <div>
      Component A - {data}
    </div>
  )
}

export default CompA
