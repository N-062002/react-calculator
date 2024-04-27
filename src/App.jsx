import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Calculator } from './component/calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App">
      <h2 style={{
        textAlign: "center",
        color: "#fff",
        fontSize: "32px"
      }}> React Calculator </h2>
      <Calculator />
    </div>
    </>
  )
}

export default App
