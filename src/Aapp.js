// import React from 'react';
// import {useState, useEffect} from 'react';


// // import Studentdata from './student.jsx';

// // function App() {
// // //   // const [name,setname]=useState('anmol')
// // //   const [data,setdata]= useState('');
// // //   const [print,printvalue]=useState(false);
// // //   function getvalue(val){
// // //     console.log(val.target.value);
// // //   setdata(val.target.value)
// // //   }
// // const [status,showstatus]= React.useState(false)
  
// //   return (
// // //     // <div>
// // //     //  <Studentdata name={name}/>
// // //     //  <button onClick={()=>{setname('pramisha')}}>update</button>
// // //     //  </div>
// // //     <div>

// // //  {/* {
// // //   print?
// // //   <h1>{data}</h1>
// // //   :null


// // //  }
// // //  <input type='text' onChange={getvalue}/>
// // //  <button onClick={()=>{printvalue(true)}}>print</button>
// // //  </div> */}
// // <div>
// //   {
// //     status?<h1>hello world</h1>:null
// //   }
  
// //   {/* <button onClick={()=>{showstatus(true)}}>show</button>
// //   <button  onClick={()=>{showstatus(false)}}>hide</button> */}
// //   <button  onClick={()=>{showstatus(!status)}}>toggle</button>

// // </div>
   
// //   );
// // }




// // function App(){
// //   const[name,setName]= useState('');
// //   const[terms, setTerm]= useState(false);
// // const[country,setCountry]= useState('');


// // function getFormData(e){
// //   console.log(name,terms,country);
// //   e.preventDefault();
// // }
// //   return(
// //     <div>
// //       <h1>handle form in react</h1>
// //         <form onSubmit={getFormData}>
// //           <input placeholder='enter name' type='text' onChange={(e)=>setName(e.target.value)} />
// //           <br/>
// //           <br/>
// //           <select onChange={(e)=>setCountry(e.target.value)}>
// //             <option>select option</option>
// //                         <option>nepal</option>
// //             <option>india</option>
// //           </select>
// //                     <br/>
// //           <br/>

// //           <input onChange={(e)=>setTerm(e.target.checked)} type='checkbox'/> <span>accept terms and condition </span>
// //           <br/>
// //           <br/>

// //           <button type='submit'>submit</button>        

// //         </form>
// //     </div>
// //   )
// // }
// // function App(){
// //   const[timer,setTime]=useState(0);

// //   useEffect(()=>{
// //     setTimeout(()=>{
// //       setTime((timer)=>timer+1);
// //     },1000);
// //   })
// //   return (
// //     <div><h1>set time interval {timer} period</h1></div>
// //   )
// // }

// // export default App;
// // get Api method =====
// // function App(){
// //   const [data,setData]=useState([]);
// //   useEffect(()=>{
// //     fetch('https://jsonplaceholder.typicode.com/users/1/todos').then((result)=>{
// //       result.json().then((respon)=>{
// // setData(respon);
// //       })
// //   })
// //   },[]);
// //   console.log(data);      
 
// //   return(
// //     <div>
// //       <h1>get api called</h1>
// //       <table border='1px'>
// //         <tr>
// //           <td>userId</td>
// //           <td>Id</td>
// //           <td>title </td>
// //           <td>completed</td>
// //         </tr>
// //         {
// //           data.map((item)=>
// //               <tr>
// //                 <td>{item.userId}</td>
// //                 <td>{item.ID}</td>
// //                 <td>{item.title}</td>
// //                 <td>{item.completed}</td>
// //               </tr>
// //           )
// //         }
// //       </table>
// //     </div>
// //   )
// // }
// // export default App;

// // // post api method ===

// // const [name, setName]=useState('');
// // const [email,setEmail]=useState('');
// // function App(){
// //   fetch('https://jsonplaceholder.org/users?id=1').then((result)=>{
    
// //   })
// //   return(
// // <div>
// //   <h1>post method</h1>
// //   <input type='name' name='name'/>
// //   <input type='email' name='email'/>
// // </div>
// //   )
// // };

// // export default App();