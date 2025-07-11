import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from '../public/title.png'

function App() {

  return (
    <>
    <div id='title'>
      <img src={logo} style={{ width: "70%", height: "70%"}}/>
    </div>
    <div>
    <div id='forms'>
      <input type='text' placeholder='Name'></input>
      <input type='text' placeholder='Lobby Code'></input>
    </div>
    </div>
    <div id='buttons'>
      <button type='button' id='create' onClick={()=> window.open("CODE", "_blank")}>Create Lobby</button>
      <button type='button' id='join'>Join Lobby</button>
    </div>
    </>
  )
}

export default App
