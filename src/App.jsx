import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Not_found from './components/Not_found/Not_found'
import About from './pages/About'
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/*' element={<Not_found/>}/>
      </Routes>
    <Footer/>

</BrowserRouter>
  )
}

export default App