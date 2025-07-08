import React, { createContext, useState } from 'react'
import productosData from '../data/productos'

const ProductosContext = createContext()

const ProductosProvider = ({ children }) => {
  // Inicializa el estado con los productos locales
  const [productos, setProductos] = useState(productosData)
  const [productoAEditar, setProductoAEditar] = useState(null)

  // Las funciones de crear, actualizar y eliminar solo afectan el estado local
  const crearProductoContext = (productoNuevo) => {
    // Genera un nuevo id incremental
    const nuevoId = productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1
    const nuevoProducto = { ...productoNuevo, id: nuevoId }
    setProductos([...productos, nuevoProducto])
  }

  const actualizarProductoContext = (productoAEditar) => {
    const nuevoEstadoProductos = productos.map(prod => prod.id === productoAEditar.id ? productoAEditar : prod)
    setProductos(nuevoEstadoProductos)
  }

  const eliminarProductoContext = (id) => {
    const nuevoEstadoProductos = productos.filter(prod => prod.id !== id)
    setProductos(nuevoEstadoProductos)
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