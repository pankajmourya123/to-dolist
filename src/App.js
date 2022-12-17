import React from 'react';
import {BrowserRouter,Route, Routes,} from 'react-router-dom'
import Header from './Components/Header';
import Advance from './Components/Advance';
import TodoList from './Components/TodoList';
function App() {
  return (
  <div>
       <BrowserRouter>
  
    
    <div className='todo-app'>
      
    
 <Routes>
      <Route path='/' element={<TodoList/>} />
     
      
     
    
      </Routes>
    
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;