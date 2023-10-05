import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const Orders = () => {
  return (
    <div style={{background:'yellow'}}>
            <h1>Orders</h1>
            <button><Link to='cart' style={{textDecoration:'none'}}>Cart</Link></button>
            <Outlet/>
    </div>
  )
}

export default Orders