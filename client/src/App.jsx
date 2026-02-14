import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Result from './pages/Result'
import Navbar from './components/Navbar'
import Heading from './components/Heading'
import Disclaimer from './components/Disclaimer'
import Contact from './components/Contact'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Concern from './components/Concern'
import Symptom from './components/Symptom'
import Age from './components/Age'
import Sex from './components/Sex'
import Location from './components/Location'
import HealthHistory from './components/HealthHistory'
import { Toaster } from 'react-hot-toast'
import { SymptomContext } from './context/SymptomContext'


const App = () => {
  const { token } = useContext(SymptomContext);
  return (

    <>

      <Toaster />

      {
        (!token) ? (
          <Login />
        ) :
          (<div>

            <Navbar />

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/result' element={<Result />} />
              <Route path='/login' element={<Login />} />
              <Route path='/symptoms' element={<Symptom />} />
              <Route path='/history' element={<HealthHistory />} />
              <Route path='/age' element={<Age />} />
              <Route path='/sex' element={<Sex />} />
              <Route path='/location' element={<Location />} />
            </Routes>
            <Concern />
            <Disclaimer />
            <Contact />
            <Newsletter />
            <Footer />
          </div>)
      }
    </>
  )
}

export default App
