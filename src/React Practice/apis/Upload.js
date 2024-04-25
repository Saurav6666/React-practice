// import axios from "axios";
// import React, { useState } from "react";

// const Upload = () => {
//   const [image, setImage] = useState("");
//   const url = "http://localhost:5001/posts";

//   const handelChange = (e) => {
//     console.log(e.target.files);
//     setImage(e.target.files[0]);
//   };
//   const config = {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   };
//   const handelUpload = () => {
//     // console.log("hello")
//     try {
//       const formData = new FormData();
//       formData.append("image", image);
//       axios.post(url, formData, config).then((res) => {
//         console.log(res);
//         console.log("success");
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div>
//       <form>
//         <input type="file" onChange={handelChange} />
//         <button onClick={handelUpload}>Upload</button>
//       </form>
//     </div>
//   );
// };

// export default Upload;

import axios from "axios";
import React, { useState } from "react";

const Upload = () => {
  const[image,setImage] = useState('')
  const [form, setForm] = useState([{ firstname: "", lastname: "", email: [] }]);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleImage=(e)=>{
      console.log(e.target.files)
      setImage(e.target.files[0])
  };

  const handleApi = () => {
    const formData = new FormData();
    formData.append("image" ,image)
    formData.append("firstname", form.firstname);
    formData.append("lastname", form.lastname);
    // formData.append("email", form.email);
    form.email.forEach((email) => {formData.append('email[]',email)
      
    });

    axios
      .post("http://localhost:5001/posts", formData, {
        headers: {
          "content-type": "application/json",
          // "content-type":"multipart/form-data"
        },
      })
      .then((res) => {
        setImage(res.data)
        setForm(res.data);
      });
  };

  return (
    <div>
      <input type='file' name='file' onChange={handleImage} />
      <label>Enter First Name</label>
      <input
        type="text"
        name="firstname"
        value={form.firstname}
        onChange={handelChange}
        placeholder="enter name"
      />
      <label>Enter Last Name</label>
      <input
        type="text"
        name="lastname"
        value={form.lastname}
        onChange={handelChange}
        placeholder="enter last name"
      />
      <label>Email</label>
      <input
        type="text"
        name="email"
        value={form.email}
        onChange={handelChange}
        placeholder="enter email"
      />
      <button onClick={handleApi}>Submit</button>
    </div>
  );
};

export default Upload;
