import React, { useState,useRef } from "react";

const Form = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const [val, setval] = useState(false);
  const [save, setSave] = useState(null);
const inputvalue1=useRef()
const inputvalue2=useRef()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {

    inputvalue1.current.focus()
    inputvalue1.current.style.color="red";
    inputvalue1.current.style.backgroundColor="yellow"
    inputvalue2.current.focus()
    inputvalue2.current.style.color="red";
    inputvalue2.current.style.backgroundColor="yellow"  

    setval(true);
    setData({ username: "", password: "" });
    setSave({ ...data });
    e.preventDefault();
    console.log(typeof data.password);
  };

  const array = [
    {
      State: "Uttar Pradesh",
      Capital: "Lucknow",
    },
    {
      State: "Gujarat",
      Capital: "Gandhinagar",
    },
    {
      State: "Karnataka",
      Capital: "Bengaluru",
    },
    {
      State: "Punjab",
      Capital: "Chandigarh",
    },
    {
      State: "Maharashtra",
      Capital: "Mumbai",
    },
  ];
  const nerarr = array.map((ele) => {
    return (
      <div>
        <ul>
          <li>{ele.State}</li>
          <li>{ele.Capital}</li>
        </ul>
      </div>
    );
  });
  let myArr = [
    {
     studenName: "jack",
     studenClass: 6,
     studenSection: "a"
    },
    {
     studenName: "tom",
     studenClass: 6,
     studenSection: "a"
    }
];
const newlist=myArr.map((stud)=>{
  return <div>
    <label>studentName: {stud.studenName}</label>
    <label>studentClass: {stud.studenClass}</label>
    <label>studenSection: {stud.studenSection}</label>

  </div>
})

  return (
    <div>
      <form>
        <label>UserName</label>
        <input
        ref={inputvalue1}
          type="text"
          name="username"
          value={data.username}
          placeholder="enter your name here"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
        ref={inputvalue2}

          type="password"
          name="password"
          value={data.password}
          placeholder="enter your Password here"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        {val ? (
          <div>
            <p> {save.username}</p>
            <p>{save.password}</p>
            <table>
              <thead>
                <tr>
                  <th>username
                  </th>
                  <th>password
                  </th>
                </tr>
              </thead>
              <tbody>
              <td>{save.username}</td>
              <td>{save.password}</td>
                
              </tbody>
            </table>
          </div>
        ) : null}
      </form>

      <div>{nerarr}</div>
      <div>{newlist}</div>

    </div>
  );
};

export default Form;
