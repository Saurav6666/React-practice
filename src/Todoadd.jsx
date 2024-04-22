import React, { useState } from 'react';
import './Todoadd.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

const Todoadd = () => {
    const [content, setContent] = useState({ title: "", description: "" });
    const [first, setFirst] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContent({ ...content, [name]: value });
    };

    
    const handleSubmit= (e) => {
        e.preventDefault();
        if (editingIndex !== null) {
            // If editing, update the existing item
            const updatedFirst = [...first];
            updatedFirst[editingIndex] = content;
            setFirst(updatedFirst);
            setEditingIndex(null);
        } else {        
            // If not editing, add a new item
            setFirst([...first, content]);
        }
        setContent({ title: "", description: "" });
    };

    const handleDelete = (index) => {
        setFirst(first.filter((_, i) => i !== index));
    };

    const handleEdit = (index) => {
        setContent(first[index]);
        setEditingIndex(index);

    };
    console.log(first)

    return (
        <div>
            <div className='containers'>
                <div className='addhead'> Add Your Work Details</div>
                <button type="button" className="btn btn-primary addbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add Work
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <label htmlFor="">Title</label><br />
                                <input type="text" placeholder='Enter Title' name='title' value={content.title} onChange={handleChange} /><br />
                                <label htmlFor="">Description</label>
                                <textarea id="description" cols="40" rows="4" name="description"  value={content.description} onChange={handleChange}></textarea>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit
                                }>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
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
                        {first.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>
                                    <div>
                                        <i className="fa fa-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleEdit(index)} aria-hidden="true"></i>
                                        <i className="fa fa-trash" onClick={(e) => handleDelete(index)} aria-hidden="true"></i>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Todoadd;
