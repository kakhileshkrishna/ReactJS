import React from 'react'
import { useParams } from 'react-router-dom'

const Dashboard = () => {
  const {id} = useParams();
  return (
    <div>
      <h2>Dashboard {id}</h2>
    </div>
  )
}

export default Dashboard