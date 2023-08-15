import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
//import App from './App'
import './index.css'
import Home from './pages/Home'
import Header from './components/Header'
import Servicos from './pages/Servicos'
import ListaDevs from './pages/ListaDevs'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='servicos' element={<  Servicos/> }></Route>
        <Route path='listadevs' element={ < ListaDevs /> } />
      </Routes>
      <Footer />

      {/* <Home /> */}
    </BrowserRouter>
  </React.StrictMode>,
)
