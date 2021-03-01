import React from 'react'
import Loadable from 'react-loadable';
const LoadableComponent = Loadable({
    loader: () => import('./Footer'),
    loading() {
        return <div>Loading...</div>
      }
  });

class Loadable2 extends React.Component{
    render(){
        return(
        <div>
            <h1>Loadable2 Component</h1>
            <LoadableComponent/>
        </div>    
        )
    }
}
export default Loadable2;