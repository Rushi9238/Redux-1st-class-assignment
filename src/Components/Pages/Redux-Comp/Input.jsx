import React, { useState } from 'react'
import { myStore } from '../../../Redux_files/Store'

const Input = () => {
    const[input,setInput]=useState('')

    const calldispatch=()=>{
        myStore.dispatch({
            type:'name',
            username:input
        })
        setInput('')
    }
  return (
   <>
   <div className="input-div">
   <input type="text" name="" id="" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='type here.....' />
   </div>
   <div className="btn-div">
    <button onClick={calldispatch}>click</button>
   </div>

   </>
  )
}

export default Input