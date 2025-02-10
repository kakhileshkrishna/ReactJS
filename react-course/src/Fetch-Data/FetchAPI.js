import React, {useState, useEffect} from 'react'

function FetchAPI() {
  const [data, setData] = useState([])

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json()
    ).then(json => setData(json))
  },[])

  return (
    <div className="App">
      {data.filter(item => item.id < 20).map(item => <li key={item.id}>{item.title}</li>)}
    </div>
  );
}

export default FetchAPI