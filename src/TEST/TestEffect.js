import React,{useState,useEffect} from 'react'

const TestEffect = () => {
    let [timer,setTimer] = useState(0)
    useEffect(()=>{
        console.log("Inside use effect");
    })
  return (
    <div>
        demo of use effect{console.log("inside component")}
    </div>
  )
}

export default TestEffect