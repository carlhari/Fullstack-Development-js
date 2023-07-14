import { useEffect, useState } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Navigation from './components/Navigation'


function App() {
  const [showApp, setShowApp] = useState(true)
  const [BackendData, setBackendData] = useState([])

  const handleShow= ()=>{
    setShowApp(!showApp)
  }

  const getData = ()=>{
    fetch('/api').then(res=>res.text()).then(data=>setBackendData(data))
  }

  return (
    <>  
    <div className="App">
      <Navigation showApp={showApp} handleShow={handleShow}/>
      {showApp ? <Login handleShow={handleShow}/>:<Register handleShow={handleShow}/>}
    </div>
    </>
  )
}

export default App
