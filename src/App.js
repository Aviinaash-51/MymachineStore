import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import routes from './components/routes';
import Main from './components/Main';
import Login from './pages/Login';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>    
      <Routes>
      <Route path='/' element={<><Main /></>}>      
        {
          routes.map((data, idx) => (
            <Route key={idx} path={data.path} element={data.component} exact />
          ))
        }        
        </Route>
        <Route path='/Login' element={<Login />} />
      </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
