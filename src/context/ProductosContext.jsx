import React, { createContext, useEffect } from 'react'
import { useState } from 'react'
import { peticionesHttpp } from '../helpers/peticiones-http'

const ProductosContext = createContext()

const ProductosProvider = ({ children }) => {

  const url = import.meta.env.VITE_BACKEND_PRODUCTOS
  const [productos, setProductos] = useState(null)
  const [productoAEditar, setProductoAEditar] = useState(null)

  const urlMocakpi = ''

  useEffect(() => {
    getAllProductos()
  }, [])

  const getAllProductos = async () => {
    try {
      const prods = await peticionesHttpp(urlMocakpi, {})
      setProductos(prods)

    } catch (error) {
      console.error('[getAllProductos]', error)
    }
  }

  const crearProductoContext = async (productoNuevo) => {
    try {
      delete productoNuevo.id // borra el atributo/key id del obj productoNuevo

      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(productoNuevo)
      }

      const prods = await peticionesHttpp(urlMocakpi, options)
      const nuevoEstadoProductos = [...productos, prods]
      setProductos(nuevoEstadoProductos)

    } catch (error) {
      console.error('[crearProductoContext]', error)
    }
  }

  const actualizarProductoContext = async (productoAEditar) => {
    try {
      const options = {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(productoAEditar)
      }

      const urlActualizar = urlMocakpi + productoAEditar.id
      const productoEditado = await peticionesHttpp(urlActualizar, options)

      const nuevoEstadoProductos = productos.map(prod => prod.id === productoEditado.id ? productoEditado : prod)

      setProductos(nuevoEstadoProductos)

    } catch (error) {
      console.error('[actualizarProductoContext]', error)
    }
  }

  const eliminarProductoContext = async (id) => {
    try {
      const urlEliminacion = urlMocakpi + id
      const options = {
        method: 'DELETE'
      }
      const prodEliminado = await peticionesHttpp(urlEliminacion, options)
      console.log(prodEliminado)
      const nuevoEstadoProductos = productos.filter(prod => prod.id !== id)
      setProductos(nuevoEstadoProductos)
    } catch (error) {
      console.error('[eliminarProductoContext]', error)
    }
  }

  const data = {
    productos,
    crearProductoContext,
    actualizarProductoContext,
    eliminarProductoContext,
    productoAEditar,
    setProductoAEditar
  }

  return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>

}

export { ProductosProvider }
export default ProductosContext