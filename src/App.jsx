import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import 'react-icons/gr';
import { ToastContainer, toast } from 'react-toastify';
import IconsComponent from './components/IconsComponent.jsx' 
import ToastifyIcons from './components/ToastifyIcons.jsx'
import  IdleTimer  from  './components/IdleTimer.jsx'


function App() {
  return (
    <div className='wrapper'>
      <IconsComponent /> 
      <ToastifyIcons />
      <IdleTimer />
      <ToastContainer />
    </div>
  )
}

export default App;