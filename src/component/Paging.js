import React from 'react';
import Pagination from 'react-bootstrap/Pagination';


 

class Paging extends React.Component{
  constructor(){
    super();
    console.log("====",this.props);
  }
  
    createTable = (pages) => {
        let table = []
          let children = []
          for (let j = 1; j < pages; j++) {
            children.push(<Pagination.Item onClick={()=>this.props.data.changePage({startLimit:j*this.props.data.perPageRecord,endLimit:(j+1)*this.props.data.perPageRecord})}>{` ${j}`}</Pagination.Item>)
          }
          table.push(<>{children}</>)
        return table
      }

    render(){
      console.log("====",this.props.data.Endlimit);
      let totalCount=this.props.data.totalrecord;
      let numberRecord=this.props.data.perPageRecord;
      let pages=totalCount/numberRecord;
         return(
             <div>
                 <Pagination>
                    {this.createTable(pages)} 
                </Pagination>
             </div>   
         );   
    }

}
export default Paging;