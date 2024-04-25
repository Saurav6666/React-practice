import React, { useState, useEffect } from "react";
import axios from "axios";

const Apiheader = () => {
  const [data, setData] = useState({ title: "", tags: "" });

  const url = "http://localhost:5001/posts";
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     try {
  //       const response = await fetch(url, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //             // "custom-header1": "header1",
  //         },
  //         body: JSON.stringify(data),
  //       });
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url,data,{},
        {
          headers: {
            "Content-Type": "application/json",
                  },
        }
      )
      .then((res) => setData(res.data));
 
  };

  return (
    <div>
      Custom-Header1: header1
      <form>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange}
          placeholder="Enter title"
        />
        <label>Tags:</label>
        <input
          type="text"
          name="tags"
          value={data.tags}
          onChange={handleChange}
          placeholder="Enter Tags"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Apiheader;
