import { useRoutes } from 'react-router'
import Inicio from '../pages/inicio/Inicio'
import NoEncontrado from '../pages/NoEncontrado'
import Categoria from '../pages/producto-detalle/Categoria'

const Rutas = () => {
  const hookutas = useRoutes(
    [
      {
        path: '/',
        element: <Inicio />
      },
      {
        path: '/categorias',
        element: <Categoria />
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