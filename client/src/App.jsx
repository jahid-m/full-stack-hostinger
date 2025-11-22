import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("")
  useEffect(()=>{
    fetch("http://localhost:4000/api/message")
    .then(res => res.json())
    .then(data => setMessage(data.message))
    .catch(err => console.error(err))
  },[])
  return (
    <>
      <h1>Welcome to Zahid Ka Frontend App</h1>
      <h3>Data : {message}</h3>
    </>
  )
}

export default App
