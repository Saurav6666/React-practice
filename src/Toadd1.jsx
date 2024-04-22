// import React, { useState } from "react";

// const Toadd1 = () => {
//   const [todo, setTodo] = useState([{ title: "", description: "", isEditing: false },]);
//   const [todoss, SetTodoss] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTodo({ ...todo, [name]: value });
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//     // Editng
//     const editTOdo = todoss.findIndex((t) => t.isEditing);
//     console.log({ editTOdo });
//     // EDit Todo
//     if (editTOdo >= 0) {
//       SetTodoss((p) => {
//         return p.map((t) => {
//           if (t.isEditing) {
//             todo.isEditing = false;
//             return todo;
//           }
//           return t;
//         });
//       });
//     }

//     // Add
//     else {
//       const newtodo = [...todoss, todo];
//       SetTodoss(newtodo);
//     }

//     setTodo({
//       title: "",
//       description: "",
//     });
//   };

//   const handledelete = (deleteindex) => {
//     const deltetodo = todoss.filter((cv, index) => {
//       return index !== deleteindex;
//     });
//     SetTodoss(deltetodo);
//   };

//   const handleEdit = (editindex) => {
//     console.log("todos", todoss);
//     const edittodo = todoss.map((CurVal, ind) => {
//       if (ind === editindex) {
//         CurVal.isEditing = true;
//         setTodo(CurVal);
//       }
//       return CurVal;
//     });
//     console.log(edittodo);
//     SetTodoss(edittodo);
//   };

//   return (
//     <div>
//       <label>Title</label>
//       <br />
//       <input
//         type="text"
//         placeholder="Enter Title Here"
//         name="title"
//         value={todo.title}
//         onChange={handleChange}
//       />
//       <br />
//       <label>Description</label>
//       <br />
//       <textarea
//         name="description"
//         value={todo.description}
//         onChange={handleChange}
//       />
//       <br />
//       <button onClick={handleClick}>Submit</button>

//       {todoss.map((todos, index) => (
//         <div key={index}>
//           <p>{todos.title}</p>
//           <p>{todos.description}</p>
//           <button onClick={() => handledelete(index)}>Delete</button>
//           <button onClick={(e) => handleEdit(index)}>Edit</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Toadd1;







import React,{ useState }  from 'react'
// import '../node_modules/font-awesome/css/font-awesome.min.css';


const Toadd1 = () => {
    const[todos, setTodos]=useState([{title:"", description:""}]);
    const [addtodos, setAddTodos] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setTodos({...todos,[name]:value})
    };
    const handelSubmit=(e)=>{
        e.preventDefault();
        
        if(editingIndex !== null){
          if(editingIndex!==addtodos){
        const newTodo=[...addtodos,todos]
        newTodo[editingIndex] = todos;
        setAddTodos(newTodo)
        setEditingIndex(null);}

        }else {        
            // If not editing, add a new item
            setAddTodos([...addtodos, todos]);
        }
      console.log(todos)
      setTodos({
              title: "",
              description: "",
            });
    }

const handeDelete=(deleteIndex,index)=>{
    const deleteTodo=addtodos.filter((todoVal, index)=>{
        return index!==deleteIndex

    })
        setAddTodos(deleteTodo)
}
const handelEdit=(item,editIndex)=>{


   
    const editedTodo=addtodos.map((currentTodo,index)=>{
        if(item===index){
            return { ...currentTodo, title: item.title, description: item.description };
          
            //     currentTodo.title=item.title
            // currentTodo.description=item.description
            // return { title: todos.title, description: todos.description };
        }
        return currentTodo;
   
    }) 
    setAddTodos(editedTodo)
    setTodos({ title: item.title, description: item.description });
    setEditingIndex(item);

}





  return (
    <div>
    <div className='todo'>
      <label>Title</label>
      <input type="text" placeholder='Enter title' name='title' value={todos.title}  onChange={handleChange}/>
      <label htmlFor="">Description</label>
      <input type="text" placeholder='Enter Description' name='description' value={todos.description}  onChange={handleChange}/>
        <button onClick={handelSubmit}>Submit</button>
    </div>
    <div className='tablebody'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {addtodos.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>
                                    <button onClick={()=>handeDelete(index)}>Delete</button>
                                    <button onClick={()=>handelEdit(item,index)}>Edite</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
    </div>
  )
}

export default Toadd1


// import React, { useState } from 'react';

// const Toadd1 = () => {
//     const [todos, setTodos] = useState({ title: "", description: "" });
//     const [addtodo, setAddTodo] = useState([]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setTodos({ ...todos, [name]: value });
//     };
//     const handelSubmit = (e) => {
//         e.preventDefault();
//         if (todos.title.trim() !== '' && todos.description.trim() !== '') {
//             // Check if editing an existing entry
//             const existingIndex = addtodo.findIndex(todo => todo.title === todos.title && todo.description === todos.description);
//             if (existingIndex !== -1) {
//                 const editedTodo = addtodo.map((todo, index) => {
//                     if (index !== existingIndex) {
//                         return todos;
//                     }
//                     return todo;
//                 });
//                 setAddTodo(editedTodo);
//             } else {
//                 // If not editing, add a new entry
//                 const newTodo = [...addtodo, todos];
//                 setAddTodo(newTodo);
//             }
//             setTodos({ title: "", description: "" });
//         }
//     };

//     const handeDelete = (deleteIndex) => {
//         const deleteTodo = addtodo.filter((_, index) => index !== deleteIndex);
//         setAddTodo(deleteTodo);
//     };

//     const handelEdit = (item, editIndex) => {
//         const editedTodo = addtodo.map((currentTodo, index) => {
//             if (index === editIndex) {
//                 return { ...item };
//             }
//             return currentTodo;
//         });
//         setAddTodo(editedTodo);
//         setTodos({ title: item.title, description: item.description });
//     };

//     return (
//         <div>
//             <div className='todo'>
//                 <label>Title</label>
//                 <input type="text" placeholder='Enter title' name='title' value={todos.title} onChange={handleChange} />
//                 <label htmlFor="">Description</label>
//                 <input type="text" placeholder='Enter Description' name='description' value={todos.description} onChange={handleChange} />
//                 <button onClick={handelSubmit}>Submit</button>
//             </div>
//             <div className='tablebody'>
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>S.No</th>
//                             <th>Title</th>
//                             <th>Description</th>
//                             <th>Manage</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {addtodo.map((item, index) => (
//                             <tr key={index}>
//                                 <td>{index + 1}</td>
//                                 <td>{item.title}</td>
//                                 <td>{item.description}</td>
//                                 <td>
//                                     <button onClick={() => handeDelete(index)}>Delete</button>
//                                     <button onClick={() => handelEdit(item, index)}>Edit</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Toadd1;

