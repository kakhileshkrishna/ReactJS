import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Axios = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                setData(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

  return (
    <div>
        {data.map(item => <li key={item.id}>{item.title}</li>)}
    </div>
  )
}

export default Axios