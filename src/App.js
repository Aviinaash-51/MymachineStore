import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import routes from './components/routes';

function App() {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  const toggleButton = () => {
    setToggle(prev => !prev);
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar onToggle={toggleButton} toggle={toggle} />
      <Routes>
        {
          routes.map((data, idx) => (
            <Route key={idx} path={data.path} element={data.component} exact />
          ))
        }
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
