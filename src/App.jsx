import { useState } from 'react'
import './App.css'
import Users from './Users/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
                  <Users />
      </div>
    </>
  )
}

export default App
