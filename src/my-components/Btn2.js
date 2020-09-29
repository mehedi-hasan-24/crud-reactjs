import React from 'react'
import Paragraph from './Pargarph'

function Btn2(props){
    // const [values, setValues] = useState(false)
    let valuesCopy = props.values
    let data2Copy = valuesCopy.data2

    const setValues2 = () =>{
        
        data2Copy[props.index] = !data2Copy[props.index]
        valuesCopy = {...valuesCopy, data2:data2Copy}
        props.setValues(valuesCopy)
    }
    return (
        <div>
            <div>Hi! I am level 2</div>
            <div><button onClick={() => setValues2()}>=></button></div>
            <div>{ data2Copy[props.index] && <Paragraph/>}</div>
        </div>
        
    )
}

export default Btn2