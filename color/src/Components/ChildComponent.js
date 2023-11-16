
import GrandChildComponent from "./GrandChildComponent";

const ChildComponent=(props)=>(

    <>
    <div
     style={{border:"2px solid black",
marginLeft:"50px",
padding:"10px",
fontSize:"30px"

}}>
    <GrandChildComponent  color={props.color}/>
    </div>
    </>
);


export default ChildComponent;