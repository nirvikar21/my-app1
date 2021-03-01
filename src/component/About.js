import React from 'react';
import img1 from "./mobiles/galaxyTab.jpg"
import img2 from "./mobiles/newiPhone12.jpg"
import img3 from "./mobiles/realmeWatch.jpg"
import img4 from "./mobiles/galaxyTab.jpg"
import ErrorBoundary from './ErrorBoundary';
import Loadable2 from './Loadable2'
import Header from './Header.js';
var isShow=true
class About extends React.Component{
 constructor(){
     super()
     
 }

 LoadComponent =()=>{
     let status
     if(this.state && this.state.status==true){
         status=false
     }else{
        status=true
     }
     this.setState({
        status
      });
}
    render(){
        //const {status} = this.state
        //console.log('====stat', this.state)
        return(
            <div>
                <Header/>
                <h1>Images</h1>
                <img src={img1}></img>
                <img src={img2}></img>
                <ErrorBoundary>
                <img src=""></img>
                </ErrorBoundary>
            {this.state && this.state.status==true?<Loadable2/>:''}
                <button onClick={()=>{this.LoadComponent()}}>Loadable component</button>
            </div>
        )

    }
    
}
export default About;