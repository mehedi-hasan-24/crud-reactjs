import React, {useState} from 'react'

function CRUD(){
    const [name, setName] = useState("")
    const [names, setNames] = useState({nameValue: []})
    const[updateIndex, setUpdateIndex] = useState(-1)

    const appendName = (namValue)=>{
        let namesCopy = names.nameValue
        if (updateIndex === -1){
            namesCopy.push(name)
            console.log(namesCopy)

            setNames({nameValue: namesCopy})
        }else{
            namesCopy[updateIndex] = name
            setNames({nameValue: namesCopy})
        }
        
        setName("")
        setUpdateIndex(-1)

    }

    const deleteName = (index) =>{
        let namesCopy = names.nameValue

        namesCopy.splice(index, 1)
        setNames({nameValue: namesCopy})

    }

    const deleteNames = () =>{
        setNames({nameValue:[]})

    }

    const updateName = (index) =>{
        let namesCopy = names.nameValue
        setUpdateIndex(index)
        setName(namesCopy[index])
    }

    return(
        <div>
            
            <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name}></input>
            <button onClick={()=>{appendName(name)}}>Submit</button>
            <button onClick={()=>{deleteNames(name)}}>Delete All</button>

            {
                names.nameValue.map((val, index)=>{
                    return(
                        <div key={index}>
                                 {val} 
                                <button onClick={()=>{updateName(index)}}>Edit</button> 
                                <button onClick={()=>{deleteName(index)}}>Delete</button>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CRUD