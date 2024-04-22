import React, { useRef, useState } from "react";

const Userefform = () => {
  const titleValue = useRef();
  const descriptionValue = useRef();
  const [tablevale, setTableValue] = useState([]);

  const handelSubmit = (e) => {
    
    e.preventDefault();
    const title = titleValue.current.value;
    const description = descriptionValue.current.value;
    if (title !== "" && description !== "") {
      setTableValue((previous)=>[
        ...previous,
        {title:title,description:description}
        
      ]) 
      titleValue.current.value=""
      descriptionValue.current.value=""
    }

    console.log({ title, description });
  };

const handelDelete=(eleIndex)=>{
  const deletevalue=tablevale.filter((cv,index)=>{
      return index !== eleIndex
  })
  setTableValue(deletevalue)

}
  const handelEdit=(element,index)=>{
    const updatedValues=tablevale.map((item,indx)=>{
      if(indx===index){
        titleValue.current.value=item.title
        descriptionValue.current.value=item.description
      }
      return item
      
    })
    setTableValue(updatedValues)
  }

  return (
    <div>
      <form action="">
        <label htmlFor="">Title</label>
        <input ref={titleValue} type="text" placeholder="Enter Title" />
        <label htmlFor="">Description</label>
        <input
          ref={descriptionValue}
          type="text"
          placeholder="Enter Description"
        />
        <button onClick={handelSubmit}>Submit</button>

      </form>
      <div>
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
            
          {tablevale.map((element,eleIndex)=>{
            return <tr>
            <td>{eleIndex+1}</td>
            <td>{element.title}</td>
            <td>{element.description}</td>
            <td> <button onClick={(e)=>handelEdit(element,eleIndex)}>Edit</button> <button onClick={(e)=>handelDelete(eleIndex)}>Delete</button></td>
           
          </tr>
          }) }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Userefform;


// import React, { useRef, useState } from "react";

// const Userefform = () => {
//   const titleValue = useRef();
//   const descriptionValue = useRef();
//   const [tablevale, setTableValue] = useState([]);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handelSubmit = (e) => {
//     e.preventDefault();
//     const title = titleValue.current.value;
//     const description = descriptionValue.current.value;
//     if (title !== "" && description !== "") {
//       if (selectedItem === null) {
//         setTableValue((previous) => [
//           ...previous,
//           { title: title, description: description },
//         ]);
//       } else {
//         const updatedValues = tablevale.map((item, index) =>
//           index === selectedItem
//             ? { title: title, description: description }
//             : item
//         );
//         setTableValue(updatedValues);
//         setSelectedItem(null);
//       }
//       titleValue.current.value = "";
//       descriptionValue.current.value = "";
//     }
//   };

//   const handelEdit = (element, index) => {
//     setSelectedItem(index);
//     titleValue.current.value = element.title;
//     descriptionValue.current.value = element.description;
//   };

//   return (
//     <div>
//       <form action="">
//         <label htmlFor="">Title</label>
//         <input ref={titleValue} type="text" placeholder="Enter Title" />
//         <label htmlFor="">Description</label>
//         <input
//           ref={descriptionValue}
//           type="text"
//           placeholder="Enter Description"
//         />
//         <button onClick={handelSubmit}>Submit</button>
//       </form>
//       <div>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>S.No</th>
//               <th>Title</th>
//               <th>Description</th>
//               <th>Manage</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tablevale.map((element, eleIndex) => {
//               return (
//                 <tr>
//                   <td>{eleIndex + 1}</td>
//                   <td>{element.title}</td>
//                   <td>{element.description}</td>
//                   <td>
//                     <button onClick={(e) => handelEdit(element, eleIndex)}>
//                       Edit
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Userefform;
