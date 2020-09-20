import React,{useState} from 'react'



function Form(event){
    const [names, setName] = useState("");
    const [namesCopy, setNameCopy] = useState("");
    const  onSubmitHandler=(event)=>{
        event.preventDefault()
        setNameCopy(names)   
    }

    const onChangeHandler=(event)=>{
        event.preventDefault()
        var newName = event.target.name
        var value = event.target.value
        setName(value)
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <p>{namesCopy}</p>
                <input  type="text" placeholder="Your Name" onChange={onChangeHandler} name="name"></input><br/>
                <input type="submit" value="Submit" ></input>
            </form>   
        </div>
    )

    
}

export default Form