import './App.css';
import Sidebar from './Sidebar ';
import Graph from './Graph';
import React from "react";
import Calendar from './Calendar';
// import Assignment from './Assignment'


const App = () => {
  return (

  
     
    <div className="App">
      <Sidebar/>
      <Graph/>
      {/* <Assignment/> */}
      <Calendar/>

  
    </div>
  )
  };

  export default App;

  