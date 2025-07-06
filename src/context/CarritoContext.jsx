import { createContext, useMemo } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { peticionesHttpp } from "../helpers/peticiones-http"


//! Creo el contexto
const CarritoContext = createContext()

//! Armado del provider
const CarritoProvider = ({ children }) => {

  //* URL
  //const urlCarrito = import.meta.env.VITE_BACKEND_CARRITO
  const urlCarritoMockapi = ''

  const [agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito] = useLocalStorage('carrito', [])

  function elProductoEstaEnElCarrito(producto) {
    const nuevoArray = carrito.filter(prod => prod.id == producto.id)
    return nuevoArray.length
  }

  function obtenerProductoDeCarrito(producto) {
    return carrito.find(prod => prod.id === producto.id)
  }

  const agregarProductoAlCarritoContext = (producto) => {
    console.log('Ya estoy en el agregar contexto', producto)

    // averiguo si esta o no esta en el carrito y hago en consecuencia
    if (!elProductoEstaEnElCarrito(producto)) {
      console.log('No está en el carrito')
      producto.cantidad = 1
      agregarAlCarrito(producto) // agrego el producto en el LocalStorage y modifico el estado
    } else {
      console.log('Y esta en el carrito')
      const productoDelCarrito = obtenerProductoDeCarrito(producto)
      console.log(productoDelCarrito)
      productoDelCarrito.cantidad++
      window.localStorage.setItem('carrito', JSON.stringify(carrito))
    }
  }

  const eliminarProductoDelCarritoContext = (id) => {
    eliminarDelCarrito(id)
  }

  const limpiarCarritoContext = () => {
    limpiarCarrito()
  }

  const guardarCarritoBackendContext = async () => {
    try {
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(carrito)
      }
      const carritoGuardado = await peticionesHttpp(urlCarritoMockapi, options)
      console.log(carritoGuardado)

      limpiarCarrito()
    } catch (error) {
      console.error('[guardarCarritoBackendContext]', error)
    }
  }

  const calcularTotalCarritoContext = useMemo(() => {
    return carrito.reduce((total, producto) => {
      const precio = Number(producto.precio) || 0
      const cantidad = Number(producto.cantidad) || 0
      return total + (precio * cantidad)
    }, 0)
  }, [carrito])

  const contarProductosCarritoContext = useMemo(()=> {
    return carrito.reduce((total, producto) => total + (producto.cantidad || 0), 0)
  }, [carrito])

  const data = {
    agregarProductoAlCarritoContext,
    eliminarProductoDelCarritoContext,
    limpiarCarritoContext,
    guardarCarritoBackendContext,
    carrito,
    calcularTotalCarritoContext,
    contarProductosCarritoContext
  }

  return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>

}

//! Exportaciones
export { CarritoProvider }
export default CarritoContext