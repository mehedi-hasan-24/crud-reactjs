import React, {useState} from 'react'
import {uuid, uuidv4} from 'uuidv4'

function CRUD(){
    // const [name, setName] = useState("")
    // const [names, setNames] = useState({nameValue: []})
    const [name, setName] = useState("")
    const [value, setValue] = useState()
    const [values, setValues] = useState({valuesArray:[], idsArray: []})
    const[updateIndex, setUpdateIndex] = useState("-1")

    const appendName = (namValue)=>{
        // let namesCopy = names.nameValue
        let valuesCopy = values.valuesArray
        // let valNameCopy = name
        let idsCopy = values.idsArray
        // setValue({nameVal: name, id: uuid()})
        // console.log(value)
        if (updateIndex === "-1"){
            // namesCopy.push(name)
            // valuesCopy.push(v)
            // console.log(value)
            // console.log(value, uuid())
            // setValues({valuesArray: pairValuesCopy})
            valuesCopy.push(name)
            idsCopy.push(uuid())
            setValues({valuesArray: valuesCopy, idsArray: idsCopy})
        }
        else{
            // namesCopy[updateIndex] = name
            // setNames({nameValue: namesCopy})
            let valuesCopy = values.valuesArray
            let idsCopy = values.idsArray
            idsCopy.map((val, index)=>{
                if (val === updateIndex){
                    
                   valuesCopy[index] = name
                   setValues({valuesArray: valuesCopy, idsArray:idsCopy})
                }
            })
            
        }
        
        setName("")
        setUpdateIndex("-1")

    }

    const deleteName = (id) =>{
        // let namesCopy = names.nameValue
        let valuesCopy = values.valuesArray
        let idsCopy = values.idsArray
        idsCopy.map((val, index)=>{
            if (val === id ){
                valuesCopy.splice(index, 1)
                idsCopy.splice(index, 1)

                setValues({valuesArray: valuesCopy, idsArray:idsCopy})
            }
        })

        // namesCopy.splice(index, 1)
        // setNames({nameValue: namesCopy})

    }

    const deleteNames = () =>{
        setValues({valuesArray:[], idsArray:[]})
        setName("")

    }

    const updateName = (id) =>{
        // let namesCopy = names.nameValue
        // setUpdateIndex(index)
        // setName(namesCopy[index])
        // let valuesCopy = values.valuesArray
        
        let valuesCopy = values.valuesArray
        let idsCopy = values.idsArray
        idsCopy.map((val, index)=>{
            if (val === id ){
                
               setName(valuesCopy[index])
            }
        })
        setUpdateIndex(id)
       
    }

    return(
        <div align="center" >
            <br/> <br/> <br/>
            
            <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name}></input>
            <button onClick={()=>{appendName(name)}}>Submit</button>
            <button onClick={()=>{deleteNames(name)}}>Delete All</button>

            {
                values.valuesArray.map((val, index)=>{
                    return(
                        <div key={index}>
                                 {val}
                                <button onClick={()=>{updateName(values.idsArray[index])}}>Edit</button> 
                                <button onClick={()=>{deleteName(values.idsArray[index])}}>Delete</button>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CRUD