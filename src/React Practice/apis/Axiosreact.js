import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Axiosreact = () => {
    const [data, setData] = useState([])
    const url= "http://localhost:5000/posts"
    useEffect(() => {
   axios
        .get(url)
        .then((res)=>setData(res.data));
    
     
    }, [])
    
  return (
    <div>
      <h1>hello</h1>
      {
        data.map((value)=>{
            return <h1>{value.title}</h1>
        })
      }
    </div>
  )
}

export default Axiosreact
