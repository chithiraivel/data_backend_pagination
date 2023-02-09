import React, { useEffect, useState } from 'react'
import { API_URL } from '../Constants/URL'
import axios from 'axios'
import  Button  from '@mui/material/Button';
const Update = () => {

    const [apiData,setApiData] =useState([]);
    const getData = async () => {
        const update = await axios.get(API_URL)
        setApiData(update.data)
    }
    useEffect( () => {
        getData()
    },[])

    const deleteUser = async (id) => {
        await axios.delete(API_URL + id)
        getData()
        console.log(id);
    }
  return (
    <div>

        {
        apiData.map ((data1,index) =>
        <div style={{display:'flex'}} key={index}>
         <h1>{data1.name}</h1>
         <Button onClick={() => deleteUser(data1.id)}>delete</Button>
         </div>
         )}
    </div>
  )
}

export default Update