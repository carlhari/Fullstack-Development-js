import { useEffect, useState } from 'react'


function App() {
  const [BackendData, setBackendData] = useState([])

  useEffect(()=>{
    fetch('/')
    .then(res = res.txt())
    .then(data => setBackendData(data))
  },[])

  return (
    <>
      <div>{BackendData}</div>
    </>
  )
}

export default App
