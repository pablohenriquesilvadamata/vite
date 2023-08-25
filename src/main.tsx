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
import PerfilUsuario from './pages/PerfilUsuario'
import VisualizarServico from './pages/VisualizarServico'
import CadastroUsuario from './pages/CadastroUsuario'
import CadastroServico from './pages/CadastroServico'
import Login from './pages/Login'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='servicos' element={<  Servicos/> } /> 
        <Route path='listadevs' element={ < ListaDevs /> } />
        <Route path='perfil/:idUsuario' element={ <PerfilUsuario /> } />
        <Route path='visualizarservico' element={ <VisualizarServico /> } />
        <Route path='cadastrousuario' element={ <CadastroUsuario /> } />
        <Route path='cadastroservico' element={ <CadastroServico /> } />
        <Route path='login' element={ <Login /> } />
      </Routes>
      <Footer />

      {/* <Home /> */}
    </BrowserRouter>
  </React.StrictMode>,
)
