import React from 'react'
import ProductList from './ProductList'

// const Home = ({data}) => {
  const Home = () => {
  return (
    <>
      <div style={{ marginLeft: 50 }}>
        <div>This is Home Component</div>
        {/* <ProductList data={data}></ProductList> */}
        <ProductList></ProductList>
      </div>
    </>
  )
}

export default Home