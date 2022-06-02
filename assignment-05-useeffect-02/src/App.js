import React from 'react'
import "./App.css";
import {Routes,Route} from 'react-router-dom'
import Timer from './components/Timer'
import Stopwatch from './components/Stopwatch'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Stopwatch/>}/>
        <Route  path='/timer' element={<Timer/>}/>
      </Routes>
    </div>
  )
}

export default App
