import React, { useState }  from 'react'
import './Loginpage.css'

const Loginpage = () => {
  const [logindata, setLogindata] = useState({username:"",passward:""});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogindata({
      ...logindata,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    setLogindata({ username: "", passward: "" });
    e.preventDefault();
    console.log(logindata)
    // console.log(typeof logindata.password);
  };
  return (
    <div className='background'>
     
          <div className='header'>
          <h2>Login</h2>
          </div>
          <form>

            <input type='text' name="username" value={logindata.username} placeholder='Enter your Name'   onChange={handleChange}></input>
            <input type='text'  name="passward" value={logindata.passward} placeholder='Enter your Passward' onChange={handleChange}></input><br/>

            <button type="submit" onClick={handleSubmit}>Submit </button>
          </form>

      
      
    </div>
  )
}

export default Loginpage
