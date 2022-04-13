import React, { useState , useMemo, useCallback,useEffect} from "react";

function Fact(){
    const[counter,setCounter]=useState(0);

    const factorial=(n)=>{
        if(n<0){
            return -1;
        }
        if(n==0){
           return 1;
       }
       return n* factorial(n-1);
    }
   
     const result = useMemo(()=>{
         return factorial(counter);
     },[counter]);

    const[name,setName]=useState("")

    const displayname= useCallback(()=>{
        return name;

    },[name]);

    const Displayname=({displayname})=>{
        const[value,setValue]=useState("")
        useEffect(()=>{
            setValue(displayname());
        },[displayname]);
        return <p> {`My Name is  ${value} `}</p>
    }
    return(
        <div>
            <h1>Factorial of {counter} is <span>{result}</span></h1>
            <button onClick={()=> setCounter(counter-1)}>Decrement</button> 
            <button onClick={()=> setCounter(counter+1)}>Increment</button>
            <hr></hr>
            <div><label>Enter your Name</label></div>
            <input type="text" placeholder="Enter name" 
            onChange={(e)=>setName(e.target.value)}/>
            <Displayname displayname={displayname}></Displayname>
            <hr></hr>
        </div>
    )

}
export default React.memo(Fact);