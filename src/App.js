
import "./App.css";
import ExpenseItem from "./Components/ExpenseItem";
import Form from './Components/Form';
import Error from "./Components/Error";
import { useEffect, useState } from "react";
import React   from 'react';


const getLocalItems=()=>{
  let list=localStorage.getItem('lists')
  if(list){
    return JSON.parse(localStorage.getItem('lists'));
  }
  else{
    return [];
  }
}

const App = () => {
   const data=[{
    id: 'e1',
    date: new Date(),
    name: 'Happy Tracking',
    amount: 'NA'
  }
  
  // },
  // {
  //   id: 'e2',
  //   date: new Date(2000,12,7),
  //   name: 'Washing Machine',
  //   amount: 220
  
  // },
  // {
  //   id: 'e3',
  //   date: new Date(2000,12,7),
  //   name: 'Mobile',
  //   amount: 220
  
  // },
  // {
  //   id: 'e4',
  //   date: new Date(2000,12,7),
  //   name: 'Mobile',
  //   amount: 220
  
  // },
  // {
  //   id: 'e5',
  //   date: new Date(2000,12,7),
  //   name: 'Mobile',
  //   amount: 220
  
  // }
  
  ];
 
  
const[fexp,setFexp]=useState(getLocalItems());
useEffect(()=>{
  localStorage.setItem('lists',JSON.stringify(fexp));
  
},[fexp])
// getSavedItems();
// useEffect(()=>{
//   getSavedItems();
// },[]);
const saveform=(enteredData)=>{
  const expenseData={
    ...enteredData,
    id: Math.random().toString()
  
  }
  setFexp((prevfdatai)=>{
    return [expenseData,...prevfdatai]
  })

  
};

const delHandler=(removeValue)=>{
const newtod=fexp.filter((todo,index)=> index!==removeValue)
setFexp(newtod)

}

// const savelocal=()=>{
//   localStorage.setItem('todos',JSON.stringify(fexp));

  
 

// }

// const getSavedItems=()=>{
//   if(localStorage.getItem('todos'===null)){
//     localStorage.setItem('todos',JSON.stringify([]));
//   }
//   else{
//   let dii=JSON.parse(localStorage.getItem('todos'))
  
//   console.log(dii);
 
  
  

//   }
  
// }



//  localStorage.setItem("city", "Noida");  
localStorage.removeItem('city')

// localStorage.removeItem('city')


  return (
    <>

      <Form ondel={delHandler}  onSaveData={saveform}/>
      {/* <h2 className="h21">Total: {fexp.map((el)=>el.amount+)}</h2> */}
      {fexp.length===0 ? <Error /> : (fexp.map((el,index)=> <ExpenseItem ondel={delHandler} dd={el.date} name={el.name} id={index} key={el.id} amount={el.amount} date={el.date} />))}
      {/* {fexp.map((el,index)=> <ExpenseItem ondel={delHandler} name={el.name} id={index} key={el.id} amount={el.amount} date={el.date} />)} */}
      
     
      
      {/* {data.map((el)=> <ExpenseItem></ExpenseItem>)} */}
      
      {/* <ExpenseItem dee={data[0].date} title={data[0].title} price={data[0].price}/>
      <ExpenseItem dee={data[1].date} title={data[1].title} price={data[1].price}/>
      <ExpenseItem dee={data[2].date} title={data[2].title} price={data[2].price}/>
      <ExpenseItem dee={data[0].date} title={data[0].title} price={data[0].price}/>  */}
    </>
  );
};

export default App;
