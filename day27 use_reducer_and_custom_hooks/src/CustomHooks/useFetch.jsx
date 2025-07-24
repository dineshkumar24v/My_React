import axios from 'axios';
import React, { useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([])
  axios.get(url)
  .then((res)=>setData(res.data))
  .catch((err)=>console.log(err))
  return data;
}

export default useFetch
