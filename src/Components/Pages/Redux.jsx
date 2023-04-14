import React from 'react'
import Input from './Redux-Comp/Input'
import '../../CSS_files/Redux.css'
import OutputShow from './Redux-Comp/OutputShow'
const Redux = () => {
  return (
    <>
    <div className="input">
      <h1>Input Container</h1>
     <div className="in-comp">
     <Input/>
     </div>
     <h1>Output Container</h1>
     <div className="out-comp">
      <OutputShow/>
     </div>
    </div>
    </>
  )
}

export default Redux