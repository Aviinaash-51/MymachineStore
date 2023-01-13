import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import routes from './routes'
import Footer from './Footer'

const Main = () => {
    const [toggle, setToggle] = useState(false);
  console.log(toggle);
  const toggleButton = () => {
    setToggle(prev => !prev);
  }
  return (
    <>
    <Sidebar  onToggle={toggleButton} toggle={toggle} />
    <Header toggle={toggle}/>
    <div  className={toggle? "ml70":"main-content"}>
    <Outlet />
    </div>
    <Footer/>
    </>
  )
}

export default Main