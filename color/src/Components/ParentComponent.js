import { useState } from "react";
import '../index.css';
import { colorContext } from '../Context';
import ChildComponent from "./ChildComponent";


const ParentComponent=()=>{
console.log(colorContext);
    const[color,setColor]=useState('#000000');

    return(

        <>
    <h1>Pick a Color</h1>
 <input type="color" onChange={(e)=>{
    setColor(e.target.value);
 }}
  value={color} />
<colorContext.Provider value={color}>
<ChildComponent/>
</colorContext.Provider>
 

        </>
    )
}

export default ParentComponent;