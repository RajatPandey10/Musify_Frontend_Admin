import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-between p-5 bg-gray-500 text-white'>
        <div>
          <h2>Logo</h2>
        </div>
        <div className='flex gap-10'>
          <h2>Home</h2>
          <h2>Contact</h2>
          <h2>Login</h2>
        </div>
      </div>
    </>
  )
}

export default App
