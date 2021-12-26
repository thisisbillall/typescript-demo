import React from 'react';
import './App.css';
import Button from './Button';
import ChildrenProp from './ChildrenProp';
import Greet from './Greet';
import Input from './Input';
import Parent from './Parent';
import Status from './Status';

function App() {
  
  const perSons=[
    {
      name:"bilal",
      age:"21"
    },
    {
      name:"Khna",
      age:"29"
    },
    {
      name:"Rahul",
      age:"24"
    },
    
  ]; 

  const obj={

    city:"Akola",
    pin:"444002"

  };
  return (
    <div className="App">
        <Greet names={perSons} clas="TE" obj = {obj}/>
        <Status status='Loading'/>
        <ChildrenProp>I am children</ChildrenProp>

        <Parent>
          <ChildrenProp>Hello I am Child from Parent</ChildrenProp>
        </Parent>
        <Button handleClick={(event,id)=>{console.log("Clicked!!",event,id)}}/>
        <Input value='' handleChange={(event)=>console.log(event)}/>
    </div>
  );
}

export default App;
