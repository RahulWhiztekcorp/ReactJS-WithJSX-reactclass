import React, { useContext } from 'react'
import { context } from '../App'

const Product = ({ data }) => {
  let isAdmin = useContext(context)
  console.log(isAdmin)

  return (
    <>
      <div>This is Product Component</div>
      <h1>Admin : {data}</h1>
    </>
  )
}

export default Product