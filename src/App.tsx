import React from 'react';
import logo from './logo.svg';
import './App.css';
import BasicTypes from './Components/BasicTypes';
import TodoHandler from './Components/TodoHandler';
import AdvancedDataTypes from './Components/AdvancedDataTypes';

function App() {
  
  return (
    <div className="">
          <div className='App'><h6>React Typescript</h6></div>
          <h3>This App contains some of the basic and advanced Typescript usages in react. To understand the flow across components better , a Todo Module has been implemented with Typescript</h3>
          <TodoHandler />
          <BasicTypes/>
          {/* <AdvancedDataTypes /> */}
    </div>
  );
}

export default App;
