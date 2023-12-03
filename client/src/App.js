import React, {useEffect, useState} from 'react'
import  Navbar  from "./components/navbar/navbar";
function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch('/api').then(
      res => res.json()
      ).then(
        data => {
          setBackendData(data)
        }
      )
  },[])

  return (
    <div className = "App">
      <Navbar />
      
     {/*
      {(typeof backendData.message === 'undefined') ? (
        <p>Loading...</p>
      ): (
        backendData.message.map((item, index) => (
          <p key={index}>{item}</p>
        ))
      )}
        */}
    </div>
  )
}

export default App