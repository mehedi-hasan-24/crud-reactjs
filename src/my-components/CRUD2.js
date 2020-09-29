import React, {useState} from 'react'
import { v4 as uuid} from 'uuid'

function CRUD(){
    // const [name, setName] = useState("")
    // const [names, setNames] = useState({nameValue: []})
    const [name, setName] = useState("")
    const [values, setValues] = useState({data: []})
    const[updateIndex, setUpdateIndex] = useState(false)

    const appendName = ()=>{
        if (name!==""){
            let valuesCopy = values.data
            if (updateIndex){
                let index = valuesCopy.map(val=>val.id).indexOf(updateIndex)
                if(index !== -1){
                    valuesCopy.splice(index, 1, {value: name, id: uuid()})
                    setValues({data: valuesCopy})
                }
                setUpdateIndex(false)
            }
            else{
                
                valuesCopy.push({value: name, id: uuid()})
                setValues({data: valuesCopy})
               
            }
            setName("")
           
        }
        

    }

    const deleteName = (indx) =>{
        let valuesCopy = values.data
        
        valuesCopy.splice(indx, 1)
        setValues({data: valuesCopy})
        setName("")
        setUpdateIndex(false)


    }

    const deleteNames = () =>{
        setValues({data: []})
        setName("")
        setUpdateIndex(false)

    }

    const updateName = (id) =>{
        let valuesCopy = values.data
        let index = valuesCopy.map(val=>val.id).indexOf(id)
        setName(valuesCopy[index].value)
        setUpdateIndex(id)
        
       
    }

    return(
        <div align="center" >
            <br/> <br/> <br/>
            
            <input type="text" 
            onChange={(e)=>{setName(e.target.value)}}
            value={name}
            />
            <button
             onClick={()=>{appendName()}}
             >Submit</button>
            <button 
            onClick={()=>{deleteNames(name)}}
            >Delete All</button>

            {
                values.data.map((val, index)=>{
                    return(
                        <div key={val.id}>
                                 {index+1+'. '+val.value}
                                <button onClick={()=>{updateName(val.id)}}>Edit</button> 
                                <button onClick={()=>{deleteName(index)}}>Delete</button>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CRUD