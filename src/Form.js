import React,{useState} from 'react'
import Popup from './Popup';

function Form() {
    const[names,setNames]=useState("")
    const[show,setShow]=useState(false)
    const handleChangedata=(e)=>{
         const name=e.target.name;
         const value=e.target.value;
         setNames(values=>({...values,[name]:value})); 
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(names)
        setNames("")
    }
  return (
    <div className='container-fluid'>
        <h1 className='text-center text-info'>Form</h1>
            <form onSubmit={handleSubmit} >
               <div className='row text-center mb-3'>
               <label> Username
                   <input type="text" placeholder='enter Name' name=' username'value={names.username}
                   onChange={handleChangedata}></input>
               </label>
               </div>
               <div className='row text-center mb-3'>
               <label> Email
                   <input type="email" placeholder='enter email' name='email' value={names.email}
                   onChange={handleChangedata}></input>
               </label>
               </div>
               <div className='row text-center mb-3'>
               <label> Password
                   <input type="password" placeholder='enter password' name='password' value={names.password}
                   onChange={handleChangedata}></input>
               </label>
               </div>
               <div className='row '>
                   <div className='col-md-12 text-center mt-1'>
                        <button className='btn btn-dark' onClick={()=>setShow(true)}>Submit</button>
                        {show && <Popup comeBack={setShow} />}
                        
                   </div>
               </div>
               
            </form>
    </div>
  )
}

export default Form