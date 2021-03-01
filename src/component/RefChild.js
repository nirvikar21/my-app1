import React,{forwardRef} from 'react'
const RefChild=(props,ref)=>{
        return(
            <div>
            <h1>Ref Child</h1>
            <input type="text" name="ttt" value="" ref={ref}/>
            </div>
        ); 
}

export default forwardRef(RefChild);