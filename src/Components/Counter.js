import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Counter() {
const[number,setNumber]=useState(0)
const[count,setCount]=useState(0)
const[post,setPost]=useState([])
const[id,setId]=useState(1)
useEffect(()=>{
  let timer =setTimeout(()=>{
    setCount((count)=> count+1)
    
  });
  return()=>clearTimeout(timer)

},1000)

const Increment=()=>{
  setNumber(number+1)
  console.log(`incremented by ${number}`)
}
const Decrement=()=>{
  setNumber(number-1)
  console.log(`decremented by ${number}`)
}
useEffect(()=>{
  axios
  .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then (res =>{
    console.log(res)
    setPost(res.data)
  })
  .catch(err=>{
    console.log(err)
  })
},[id])
  return (
    <div>
      <h3>Counter{number}</h3>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <h3> i runned {count}times</h3>
      <hr></hr>
      <input type="text" value={id} onChange={e=>setId(e.target.value)}></input>
      <h3>{post.title}</h3>
    </div>
  )
}
export default Counter;
