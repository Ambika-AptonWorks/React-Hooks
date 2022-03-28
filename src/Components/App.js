import React,{useRef} from 'react';
import Parent from './Parent';
import Fact from './Fact';
import Counter from './Counter';
import {useReactToPrint} from "react-to-print"

const App =()=> {
  const componentRef=useRef();
   const handlePrint = useReactToPrint({
     content:() =>componentRef.current,
   });
  return (
    <div ref={componentRef}>
        <Parent />
        <Fact />
        <Counter />
        <button onClick={handlePrint}>Print</button>
    </div>
  );
}

export default App;
