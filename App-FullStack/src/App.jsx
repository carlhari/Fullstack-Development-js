import { useEffect, useState } from 'react'


function App() {
  const [BackendData, setBackendData] = useState([])

  const getData = ()=>{
    fetch('/api').then(res=>{
      console.log(res)
      res.text()
    }).then(data=>setBackendData(data))
  }

  return (
    <>
      <button onClick={getData}>GET DATA</button>
      {BackendData}
    </>
  )
}

export default App
