import React,{ useState } from 'react'
import axios from "axios"
const Formdata = () => {
    const [data, setData] = useState({
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "ppu": 0.55,
        "batters":
            {
                "batter":
                    [
                        { "id": "1001", "type": "Regular" },
                        { "id": "1002", "type": "Chocolate" },
                        { "id": "1003", "type": "Blueberry" },
                        { "id": "1004", "type": "Devil's Food" }
                    ]
            },
        "topping":
            [
                { "id": "5001", "type": "None" },
                { "id": "5002", "type": "Glazed" },
                { "id": "5005", "type": "Sugar" },
                { "id": "5007", "type": "Powdered Sugar" },
                { "id": "5006", "type": "Chocolate with Sprinkles" },
                { "id": "5003", "type": "Chocolate" },
                { "id": "5004", "type": "Maple" }
            ]
    })
    const url="http://localhost:5001/posts"
    const handelChange=(e)=>{
        const {name,value}=e.target;
        setData({...data,[name]:value})

    }
    const handelBatterChange=(e,index)=>{
        const {name,value}=e.target;
        const updatebatters=[...data.batters.batter]
        updatebatters[index]={...updatebatters,[name]:value}
        setData({...data,batters:{batter:updatebatters}})
    }
    const handelToppingChange=(e,index)=>{
        const {name,value}=e.target;
        const updatetoppings=[...data.topping]
        updatetoppings[index]={...updatetoppings,[name]:value}
        setData({...data,topping:updatetoppings})
    }
    const handelSubmit=(e)=>{
        e.preventDefault()
        const formdata= new FormData();
        formdata.append("id",data.id)
        formdata.append("type",data.type)
        formdata.append("name",data.name)
        formdata.append("ppu",data.ppu)
        data.batters.batter.map((batter,index)=>{
            return formdata.append(`batters.batter[${index}].id`,batter.id),
                 formdata.append(`batters.batter[${index}].type`,batter.type)

        })
        data.topping.map((topping,index)=>{
            return formdata.append(`topping[${index}].id`,topping.id),
                 formdata.append(`topping[${index}].type`,topping.type)

        })
        axios.post(url,formdata,{
            headers:{
                "content-type":"mutipart/form-data"
            },body: formdata
        }).then((response)=>{console.log(response.data)}).catch((err)=>{
            console.log("err",err)
        })

    }
  return (
    <div>
      <form>
        <label>ID</label>
        <input type="text" id='id' value={data.id} placeholder='' onChange={handelChange} />
        <label>Type</label>
        <input type="type" id='id' value={data.type} placeholder='' onChange={handelChange} />
        <label>Name</label>
        <input type="name" id='id' value={data.name} placeholder='' onChange={handelChange} />
        <label>Price Per Unit (PPU):</label>
        <input type="ppu" id='id' value={data.ppu} placeholder='' onChange={handelChange} />
        <label>Batters</label>
        {
            data.batters.batter.map((batter,index)=>{
                return<div key={index}>
                    <label>ID</label>
                    <input type="text" name={`batters.batter.${index}.id`} value={batter.id} placeholder='' onChange={(e)=>{handelBatterChange(e,index)}} />
                    <label>Type</label>
                    <input type="text" name={`batters.batter.${index}.type`} value={batter.id} placeholder='' onChange={(e)=>{handelBatterChange(e,index)}} />

                </div>
            })
        }
        <label>Toppings</label>
        {
            data.topping.map((topping,index)=>{
                return <div key={index}>
                    <label>ID</label>
                    <input type="text" name={`topping.${index}.id`} value={topping.id} onChange={(e)=>{handelToppingChange(e,index)}} />
                    <label>Type</label>
                    <input type="text" name={`topping.${index}.type`} value={topping.id} onChange={(e)=>{handelToppingChange(e,index)}} />
                </div>
            })
        }
        <button onClick={handelSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Formdata
