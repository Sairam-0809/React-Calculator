import { useContext } from "react";
import { Context } from "react";
function ComponentA(){
 
    const store=useContext(context);


    return(

        <h1>
            ComponentA {store}
        </h1>
    )
}
export default ComponentA;