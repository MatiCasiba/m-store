import React from 'react'
import { useRoutes } from 'react-router'
import Inicio from '../pages/inicio/Inicio'
import Contacto from '../pages/contacto/Contacto'
import Carrito from '../pages/carrito/Carrito'
import ProductoDetalle from '../pages/producto-detalle/ProductoDetalle'
import NoEncontrado from '../pages/NoEncontrado'

const Rutas = () => {
  const hookutas = useRoutes(
    [
      {
        path: '/',
        element: <Inicio />
      },
      {
        path: '/detalle/:id',
        element: <ProductoDetalle />
      },
      {
        path: '/contacto',
        element: <Contacto />
      },
      {
        path: '/carrito',
        element: <Carrito />
      },
      {
        path: '*',
        element: <NoEncontrado />
      }
    ]
  )

  return hookutas
}

export default Rutas