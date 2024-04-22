import React,{useRef, useState} from 'react'

const Userref = () => {
    const inputValue=useRef();
    const InputFocus=()=>{
        inputValue.current.focus()
        inputValue.current.style.color="red";
        inputValue.current.style.backgroundColor="yellow"   

    }
  return (
    <div>
      <input type='text' ref={inputValue} ></input>
      <button onClick={InputFocus}> Focus input</button>
      <Refcount2/>
    </div>
  )
}
const Refcount2 =({})=>{
    const [count ,setCount] = useState(0)
      const prevCountRef = useRef();

    const handleClick=()=>{
        prevCountRef.current= count;
        setCount((prevCount)=>prevCount +1)
    }

    return(
        <div>
        <p> current Value :{count}</p>
        <p>Previous Value :{prevCountRef.current}</p>
        <button onClick={handleClick}>Increment</button>
        </div>
    )
}


export default Userref
