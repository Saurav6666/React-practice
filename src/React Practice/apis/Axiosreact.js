import React, { useState, useEffect } from "react";
import axios from "axios";
const Axiosreact = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");

  const url = "http://localhost:5001/posts";

  const getApiData = async () => {
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      console.log("error ha bhai", error.message);    
      setIsError(error.message);
    }
  };
  //   useEffect(() => {
  //  axios
  //       .get(url)
  //       .then((res)=>setData(res.data))
  //       .catch((error)=>{
  //         setIsError(error.message)
  //       });

  //   }, [])
  useEffect(() => {
    getApiData();
  },[]);
  return (
    <div>
      <h1>hello Axios</h1>
      {isError !== "" && <h2>{isError}</h2>}
      <div className="grid">
        {data.map((value) => {
          const { id, title, tags } = value;
          return (
            <div className="card" key={id}>
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{tags.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Axiosreact;
