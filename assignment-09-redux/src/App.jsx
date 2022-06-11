import './App.css'
import {Route,Routes}  from 'react-router-dom'
import Navbar from './components/Navbar'
import Counter from './pages/Counter'
import Todo from './pages/Todo'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='' element= {<Navbar/>} />
        <Route path='counter' element= {<Counter/>}/>
        <Route path='todo' element= {<Todo/>}/>
      </Routes>
    </div>
  )
}

export default App
