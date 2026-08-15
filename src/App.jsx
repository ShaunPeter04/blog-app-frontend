import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreatePost from './components/CreatePost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/create' element={<CreatePost/>}/>
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
