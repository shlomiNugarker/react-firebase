import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom'

import { useEffect } from 'react'
import './assets/scss/global.scss'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Main } from './pages/Main'
import { firebaseAuthService } from './services/firebaseAuthService'
import { firebaseDBService } from './services/firebaseDBService'

const App = () => {
  const initFirebase = async () => {
    await firebaseDBService.initFirebase()
  }

  const onSignUp = () => {
    firebaseAuthService.signUp('shlomi@gmail.com', '123456')
  }
  const onSignIn = async () => {
    firebaseAuthService.signIn('shlomin1231@gmail.com', '123456')
  }
  const onSignOut = async () => {
    firebaseAuthService.doSignOut()
  }

  useEffect(() => {
    initFirebase()
  }, [])

  return (
    <>
      <nav className="temp-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/main">Main</Link>
          </li>
        </ul>
      </nav>

      <button onClick={onSignUp}>onSignUp</button>
      <button onClick={onSignIn}>onSignIn</button>
      <button onClick={onSignOut}>onSignOut</button>

      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
