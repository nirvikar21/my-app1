import React from 'react';
import Header from './Header.js';
import{Table} from 'react-bootstrap';
import Paging from './Paging.js';

let startLim=0
let endLimit
class User extends React.Component{
    constructor(){
        super();
        this.state={
            data:'',
            start:0,
            end:10,
            pages:10
            
        }   
    }
    componentDidMount(){
        fetch( "https://jsonplaceholder.typicode.com/photos").then((reps)=>{
            reps.json().then((result)=>{
                //console.log("ssss",result.data)
                this.setState({data:result})
                console.log("===",this.state.data);
            })
        })     
    }
    changePage(pageData){
      
        this.setState({start:pageData.startLimit,end:pageData.endLimit})
        console.log("!!!",this.state.start,this.state.end);
        startLim=pageData.startLimit;
        endLimit=pageData.endLimit;
        console.log("====! change",startLim)
    }
    setPage(id){
        let dropdown= document.getElementById('pages').value  
        this.setState({pages:dropdown,start:0,end:dropdown});
    }
    searching(id){
        let search= document.getElementById('Search').value  
        this.setState({searchStr:search});
    }
    render(){
        
        let finelData;
        let finelData1;
        if(this.state.searchStr){
            var arr=this.state.data;
            if(arr){
                finelData1 =arr.find(arr => arr.title === this.state.searchStr)
                finelData=[finelData1];
                console.log("search==",finelData);
            }
        }else{
            var arr=this.state.data;
            if(arr){
                finelData = arr.slice(this.state.start,this.state.end)
            }
        }
        return(
            <div>
                <Header/>
                <div className="container">
                    <h1>User Listing</h1>
                    <select id="pages" onChange={()=>this.setPage()}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                    </select>
                    <input type="text" id="Search" /><button onClick={()=>this.searching()}>Search</button>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                        {   
                            finelData?
                            finelData.map((item)=>
                                <tr>
                                    <td>{item.id}</td> 
                                    <td><img src={item.thumbnailUrl} width="50"/></td>
                                    <td>{item.title}</td>
                                    <td>{item.id}</td>
                                </tr>
                            ):''}
                            
                        </tbody>
                    </Table>
                    {this.state.searchStr!=""?
                    <Paging data={{totalrecord:5000,perPageRecord:this.state.pages,Endlimit:this.state.end,changePage:this.changePage.bind(this)}} />
                    :''}
                </div>
            </div>
        )
    }

}
export default User;