import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { CarritoProvider } from './context/CarritoContext.jsx'
import { ProductosProvider } from './context/ProductosContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarritoProvider>
      <ProductosProvider>
         <App />
      </ProductosProvider>
    </CarritoProvider>
    
  </StrictMode>,
)
