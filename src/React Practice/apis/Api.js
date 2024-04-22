import React, { useEffect,useState } from 'react'

const Api = () => {
    const [data, setData] = useState([])
    const url= "http://localhost:5000/posts"
    // useEffect(()=>{
    //           fetch(url).then(resp =>resp.json()).then(d=>setData(d))
    //           })
             
   
      const  callapi = async()=>{
        try{
          const resp=await fetch(url)
          const apidata=await resp.json()
          setData(apidata);
          console.log(apidata)
        }
        catch{
          const error="error ha beta"
          console.log(error)
        }
      }
      useEffect(()=>{
        callapi();
      },[])
  return (
            <div>
              
                {
                data.map((value)=>{
                    return<p>{value.title} {value.tags}</p>


                })

                }
              
            </div>
           )


}

export default Api
