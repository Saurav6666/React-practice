import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Newtodo = () => {
  const [first, setFirst] = useState({ title: "", description: "" });
  const [Second, setSecond] = useState([]);
  const [changetodo, setChangetodo] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFirst({ ...first, [name]: value });
  };
  const handleClick = () => {
    if (changetodo !== null) {
      const newtodo = Second.map((todo, index) => {
        if (index === changetodo) {
          todo = { ...first };
        }
        return todo;
      });
      setSecond(newtodo);
      setChangetodo(null);
      handleClose();
    } else {
      setSecond([...Second, first]);
      handleClose();
    }
  };

  const handleDelete = (index) => {
    setSecond((prevdata) =>
      prevdata.filter((item, i) => {
        return i !== index;
      })
    );
  };

  const handleEdit = (index) => {
    const currenttodo = Second[index];
    setFirst(currenttodo);
    setChangetodo(index);
    console.log(currenttodo);
    handleShow();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Open Modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            value={first.title}
            name="title"
            onChange={handleChange}
            placeholder="Enter Title"
          />
          <br />

          <input
            type="text"
            value={first.description}
            name="description"
            onChange={handleChange}
            placeholder="Enter Description"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {Second.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Newtodo;

// import React, { useState } from 'react';
// import './Todoadd.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css';

// const Newtodo = () => {
//     const [content, setContent] = useState({ title: "", description: "" });
//     const [first, setFirst] = useState([]);
//     const [editingIndex, setEditingIndex] = useState(null);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setContent({ ...content, [name]: value });
//     };

//     const handleSubmit= (e) => {
//         e.preventDefault();
//         if (editingIndex !== null) {
//             // If editing, update the existing item
//             const updatedFirst = [...first];
//             updatedFirst[editingIndex] = content;
//             setFirst(updatedFirst);
//             setEditingIndex(null);
//         } else {
//             // If not editing, add a new item
//             setFirst([...first, content]);
//         }
//         setContent({ title: "", description: "" });
//     };

//     const handleDelete = (index) => {
//         setFirst(first.filter((_, i) => i !== index));
//     };

//     const handleEdit = (index) => {
//         setContent(first[index]);
//         setEditingIndex(index);

//     };
//     console.log(first)

//     return (
//         <div>
//             <div className='containers'>
//                 <div className='addhead'> Add Your Work Details</div>
//                 <button type="button" className="btn btn-primary addbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
//                     Add Work
//                 </button>

//                 <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                     <div className="modal-dialog">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
//                                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                             </div>
//                             <div className="modal-body">
//                                 <label htmlFor="">Title</label><br />
//                                 <input type="text" placeholder='Enter Title' name='title' value={content.title} onChange={handleChange} /><br />
//                                 <label htmlFor="">Description</label>
//                                 <textarea id="description" cols="40" rows="4" name="description"  value={content.description} onChange={handleChange}></textarea>
//                             </div>
//                             <div className="modal-footer">
//                                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit
//                                 }>Save changes</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
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
//                         {first.map((item, index) => (
//                             <tr key={index}>
//                                 <td>{index + 1}</td>
//                                 <td>{item.title}</td>
//                                 <td>{item.description}</td>
//                                 <td>
//                                     <div>
//                                         <i className="fa fa-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleEdit(index)} aria-hidden="true"></i>
//                                         <i className="fa fa-trash" onClick={(e) => handleDelete(index)} aria-hidden="true"></i>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default Newtodo;
