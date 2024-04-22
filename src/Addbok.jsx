import React,{useState} from 'react'
// import BookList from './BookList';

const Addbok = () => {
    const [addbook, setAddBook] = useState([{booktitle:"",bookdescription:""}])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddBook({ ...addbook, [name]: value });  
    };

    const handeSubmit=(e)=>{
        e.preventDefault();
console.log(addbook)
    }
  return (
    <div className='Addbook'>
      
      <div className='container'>
        <form action="">
            <label htmlFor="">Book Title</label>
            <input type="text" placeholder='Enter Book title' name='booktitle' value={addbook.booktitle} onChange={handleChange} /><br />
            <label htmlFor="">About Book</label>
            <input type="text" placeholder='Book Description' name='bookdescription' value={addbook.bookdescription} onChange={handleChange} /><br />
            <button className='addnewbook' onClick={handeSubmit} >Submit</button>
        </form>
      </div>
      {/* <BookList booksdata={addbook}/> */}
    </div>
  )
}

export default Addbok
