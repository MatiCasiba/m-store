import React from 'react'
import { BrowserRouter } from "react-router";
import Header from './components/header/Header';
import Rutas from './routes/Rutas';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Rutas />
      <Footer />
    </BrowserRouter>
  )
}

export default App