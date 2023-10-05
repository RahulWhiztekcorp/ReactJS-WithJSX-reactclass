import React, { useEffect, useState } from "react";

export default function CustomHooks() {
    let [product,setProduct] = useState();
    useEffect(
        () => {
            getdata()
        }, []
    )
    async function getdata() {
        let res = await fetch('https://fakestoreapi.com/products/1')
        let data =await res.json();
        console.log(data);
        setProduct(data);
    }
    return (
        <>
            <h1 style={{marginLeft:60}}>Hello</h1>
            {/* <div>{Object.keys(product)}</div> */}
            {/* <div>{product.id}</div> */}
            {/* <div>{product.title}</div> */}
            {/* <div>{product.image}</div>
            <div>{product.price}</div>
            <div>{product.rating}</div> */}
        </>
    )
}