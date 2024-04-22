import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Newmodal from "./Newmodal";
import './Todos.css'
const Newtodo = () => {
  const [form, setForm] = useState({ title: "", description: "" });

  const [todos, setTodos] = useState([]);
  const [changetodo, setChangetodo] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (index) => {
    setTodos((prevdata) =>
      prevdata.filter((item, i) => {
        return i !== index;
      })
    );
  };

  const handleEdit = (index) => {
    const currenttodo = todos[index];
    setForm(currenttodo);
    setChangetodo(index);
    console.log(currenttodo);
    handleShow();
  };

  return (
    <div>
      <div className="flex mt-4 bg-Neutral">
      <div className='addhead'> Add Your Work Details</div>
      <div className="">
        <Button
          class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          variant="primary"
          onClick={handleShow}>
          Add your Work
        </Button>
        <Newmodal
          form={form}
          setForm={setForm}
          todos={todos}
          setTodos={setTodos}
          handleClose={handleClose}
          changetodo={changetodo}
          setChangetodo={setChangetodo}
          show={show}/>
      </div></div>
      <div className="grid grid-flow-col text-center p-2">
        <table className="table-auto border-collapse before border-green-900">
          <thead>
            <tr className="bg-black text-white">
              <th className="border border-green-600">Id<i class="fa-solid fa-sort"></i></th>
              <th className="border border-green-600">Title<i class="fa-solid fa-sort"></i></th>
              <th className="border border-green-600">Description<i class="fa-solid fa-sort"></i></th>
              <th className="border border-green-600">Manage<i class="fa-solid fa-sort"></i></th>
            </tr>
          </thead>
          <tbody>
            {todos.map((item, index) => {
              return (
                <tr key={index} >
                  <td className="table-auto border-collapse border border-green-600">
                    {" "}
                    {index + 1}
                  </td>
                  <td className="table-auto border-collapse  border border-green-900">
                    {item.title}
                  </td>
                  <td className="table-auto border-collapse border border-green-900">
                    {item.description}
                  </td>
                  <td className="table-auto border-collapse border border-green-900">
                    {/* <button
                      class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button> */}
                    {/* <i class="fa-solid fa-eye"></i> */}
                    <i class="fa fa-pencil" onClick={() => handleEdit(index)}></i>
                    <i className="fa-solid fa-trash" onClick={() => handleEdit(index)}></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Newtodo;
