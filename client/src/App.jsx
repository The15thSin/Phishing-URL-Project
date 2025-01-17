import Main from './components/Main/Main.jsx'
import Nav from './components/Nav/Nav.jsx'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='app'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Nav />
            <Main />
          </>
        }/>
        <Route path="/about-us" element={
          <>
            <Nav />
          </>
        }/>
        <Route path="/faqs" element={
          <>
            <Nav />
          </>
        }/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
