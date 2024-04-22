import React, { useRef, useState } from 'react'

const Form2 = () => {
    const[data,setData] =useState({ Username:"" , Password:"" , ConfirmPassword:""})
    const[datas,setDatas] =useState([])
    const Iref = useRef()
    const Iref2 = useRef()
    const Iref3 =useRef()

    const handleChange =(e)=>{
      const {value ,name} = e.target;
      setData({ ...data,
         [name]: value})
    }
    const handleClick=(e)=>{
        e.preventDefault();
        Iref.current.focus()
        Iref.current.style.backgroundColor="red"
        Iref2.current.focus()
        Iref2.current.style.backgroundColor="red"
        Iref3.current.focus()
        Iref.current.style.backgroundColor="red"
  
     
        
        // localStorage.setItem('myForm', JSON.stringify(data))
        setDatas(tabledata=>[...tabledata,data])
        setData( {Username:"" , Password:"" , ConfirmPassword:""})

        console.log(datas)
    }
  return (
    <div>
    <form  onSubmit={handleClick}>
    <label>Username :</label>
    <input type='text' ref={Iref} name='Username' value={data.Username} onChange={handleChange} placeholder='Type UserName Here'/><br/>
    
    <label>Password :</label>
    <input type='password' ref={Iref2}  name='Password' value={data.Password} onChange={handleChange} placeholder='Type Password'/><br/>
    
    <label>ConfirmPassword :</label>
    <input type='password' ref={Iref3}  name='ConfirmPassword' value={data.ConfirmPassword} onChange={handleChange} placeholder='Type Confirm Password'/><br/>
    
    <button type='submit'>Submit</button>
     
    </form>
   <table>
   <thead>
   <tr>
   <th>UserName</th>
   <th>password</th>
   <th>ConfirmPassword</th>
   </tr>

   
   </thead>
   <tbody>
   {datas.map((item,ind)=>{ 
    return  <tr key={ind}>
    <td>{item.Username}</td>
    <td>{item.Password}</td>
    <td>{item.ConfirmPassword}</td>.
    </tr>
   })}
   </tbody>
   </table>

 
      </div>
  )
}

export default Form2    