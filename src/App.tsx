import React from 'react';
import './App.css';
import Private from './auth/Private';
import Button from './Button';
import ChildrenProp from './ChildrenProp';
import { Counter } from './class/Counter';
import Greet from './Greet';
import Input from './Input';
import Parent from './Parent';
import Status from './Status';
import Style from './Style';
import UseStateFuture from './UseStateFuture';
import Profile from './auth/Profile';
import List from './Generic/List';
import RandomNum from './restrict/RandomNum';
import Toast from './tempLiterals/Toast';

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
        <Style style={{"color":"red","backgroundColor":"red"}}/>
        <UseStateFuture/>
        <Counter message='Count'/>
        <Private isLoggedIn={true} Component={Profile}/>
        <List list={[1,2,3,4]
      } onClick={(e)=>console.log(e)}/>
      <RandomNum num={10} isPositive />
      <Toast position='Center'/>
    </div>
  );
}

export default App;
