import React,{useRef} from 'react'
import RefChild from './RefChild';
import Header from './Header.js';
const RefForward =()=>{
    let inputRef=useRef(null);
    function updateInput(){
        inputRef.current.value='1000'

    }
    return(
        <div>
             <Header/>
            <h1>Ref Forwarding</h1>
            <RefChild ref={inputRef}/>
            <button onClick={updateInput} >Click Me</button>
        </div>   
    ); 
}
export default RefForward;