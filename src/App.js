// import { useEffect, useState } from "react";

import Home from "./component/home";
import './index.css'
import headercontainer from "./containers/headercontainer";
import Header from "./component/header";

// function App(){
//      const [userId,setUserId]=useState('');
//      const[id,setIDl]=useState('');
//      const[title,setTitle]=useState('');
//      const[data,setData]=useState([]);


//     function addRecord(e){
//         e.preventDefault();
//         let senddata={userId,id,title}
//         console.log(senddata);
//     }

//     function RecordData(){
        


//         useEffect(()=>{
//             fetch('https://jsonplaceholder.typicode.com/users/1/todos').then((result)=>{
//                 result.json().then((response)=>{
//                     setData(response)
//                 })
//             })
//         },[]);
        
//     }

    
//     return(
// <div>
//     <h1>CRUD APP </h1>
//     <form onSubmit={addRecord}>
//         <div>
//             <label htmlFor="name">UserId:</label>
//             <input onChange={(e)=>{setUserId(e.target.value)}}  placeholder="Name" type="text"/>
//         </div>
//         <div>
//             <label htmlFor="email">ID:</label>
//             <input onChange={(e)=>{setIDl(e.target.value)}} placeholder="Email" type="email"/>
//         </div>
//         <div>
//             <label htmlFor="address">Title</label>
//             <input onChange={(e)=>{setTitle(e.target.value)}} placeholder="address" type="text"/>

//         </div>
//         <div>
//             <button>Submit</button>
//         </div>
//     </form>
//     <div>
//         <h1>User Record</h1>
//         <div>
//             <table>
//                 <tr>
//                     <td>userID</td>
//                     <td>Id</td> 
//                     <td>title</td>
//                     <td>completed</td>
//                 </tr>
//                 {
//                     data.map((item)=>{
//                         <tr>
//                         <td>{item.userId}</td>
//                         <td>{item.Id}</td>
//                         <td>{item.title}</td>
//                         </tr>
//                     })
//                 }
//             </table>
//         </div>
//     </div>
// </div>    )
// }

// export default App;

// // function App(){
// //     return(
// //         <h1>helow world</h1>
// //     )
// // }

// // export default App;

function App(){
    return(
        <div className="main">

        <h1>hellow world</h1>
        <Header/>
        <Home/>
        </div>
    )
};

export default App;