import React from 'react'
import { useSelector } from 'react-redux'

const OutputShow = () => {
    const {name}=useSelector((selectData)=>selectData)
    console.log(name);
  return (
    <>
    <h1>{name}</h1>
    </>
  )
}

export default OutputShow