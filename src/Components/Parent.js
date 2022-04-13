import React, {useState,useCallback} from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';


function Parent(){
    const [age,setAge]= useState(20)
    const [salary,setSalary]= useState(40000)

    const incrementAge=useCallback(()=> {
        setAge(age+1)
    },[age])

    const incrementSalary=useCallback(()=> {
        setSalary(salary+1000)
    },[salary])


    return(
        <div >
            <Title />
            <Count text="age" count={age} />
            <Button handleClick={incrementAge}>IncrementAge</ Button>
            <Count text="salary" count={salary} />
            <Button handleClick={incrementSalary}>IncrementSalary</Button>
            <hr></hr>
        </div>
    )
};

export default Parent