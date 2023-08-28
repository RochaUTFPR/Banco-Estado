import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState([]);

  const getusuario = async () => {

    try {
        const response = await axios.get("http://localhost:8000/usuarios")
        const data = response.data
        setData(data);
    } catch (error) {
        console.log(error);
    }

  }

  useEffect(() => {
    getusuario()
  },[])

  return (
    <div>
     <h1>{(
      data.map((data) => (
        <div className='post' key={data.id}>
          <h1>{data.senha}</h1>
        </div>
      ))
     )}</h1>
    </div>
  );
};

export default MyComponent;
