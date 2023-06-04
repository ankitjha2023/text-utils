import React from 'react'
import Navbar from './components/Navbar'
import InputForm from './components/InputForm'
import { useState } from 'react'
import "./App.css"
import Alert from './components/alert'
const App = () => {
  const [mode,setMode] = useState('light')
  const [modePara, setModePara] = useState('Dark')
  const [icon, setIcon] = useState('sun')
  const [alert, setAlert] = useState(null)
  const handleClick = () =>{
    if(mode=="light"){
      setMode('dark')
      setModePara('Light')
      setIcon('moon')
      setAlert('Dark Mode Enabled !')
      setTimeout(()=>{
        setAlert(null)
      },2000)
    }
    if(mode=="dark"){
      setMode('light')
      setModePara('Dark')
      setIcon('sun')
      setAlert('Light Mode Enabled !')
      setTimeout(()=>{
        setAlert(null)
      },2000)
    }
  }
  return (
    <div className={`App ${mode}`}>
      <Navbar onClick={handleClick} mode={mode} para={modePara} icon={icon}/>
      <Alert alert={alert}/>
      <InputForm/>
    </div>
  )
}

export default App
