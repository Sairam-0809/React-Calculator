import { useContext } from "react";
import {colorContext} from '../Context';

function GrandChildComponent(props){
    const color=useContext(colorContext);
    return (
<p style={{color:color}}>Color:{color}</p>

    )
}

export default GrandChildComponent;