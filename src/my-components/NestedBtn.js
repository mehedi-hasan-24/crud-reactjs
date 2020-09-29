import React, { useState } from 'react'
import Btn2 from './Btn2'

function NestedBtn(){
    const [values, setValues] = useState({data: [false, false, false], data2: [false, false, false]})

    
    const onClickBtn = (index) =>{
        // let dataCopy = values.data
        // dataCopy[index] = !dataCopy[index]
        // setValues({data: dataCopy})

        let valuesCopy = values
        let datasCopy = valuesCopy.data
        datasCopy[index] = !datasCopy[index]
        valuesCopy = {...valuesCopy, data: datasCopy}
        setValues(valuesCopy)
    }

    return(
       
        <div  align="center "  className="flex-container">
            
            
            <div>
                <button onClick={() => onClickBtn(0)}>Button 1</button>
                {values.data[0] && <Btn2 values = {values} setValues={setValues} index={0}/>}
            </div>
            <br/><br/>
            <div>
                <button  onClick={() => onClickBtn(1)}>Button 2</button>
                {values.data[1] && <Btn2 values = {values} setValues={setValues} index={1}/>}
            </div>
            <br/><br/>
            <div>
                <button  onClick={() => onClickBtn(2)}>Button 3</button>
                {values.data[2] && <Btn2 values = {values} setValues={setValues} index={2}/>}
            </div>

            
            
            
        </div>
    )
}

export default NestedBtn