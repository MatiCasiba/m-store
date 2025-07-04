import React from 'react'
import { useState } from 'react'

export const useLocalStorage = (clave, valorInicial = []) => {
  
  const getValorAlmacenado = () => {
    try {
      const valorAlmacenado = window.localStorage.getItem(clave)
      return valorAlmacenado ? JSON.parse(valorAlmacenado) : valorInicial
    } catch (error) {
      console.error(`Error al obtener ${clave} del localStorage ${error}`)
      return valorInicial
    }
  }

  const [valorAlmacenado, setValorAlmacenado] = useState(getValorAlmacenado())

  const guardarValor = (valorNuevo) => {
    try {
      const nuevoValorAlmacenado = [...valorAlmacenado, valorNuevo] // creo un nuevo array con lo que tenía más lo nuevo
      setValorAlmacenado(nuevoValorAlmacenado) // cambio el estado
      window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado))
    } catch (error) {
      console.error(`Error al guardar ${clave} del localStorage: ${error}`)
    }
  }

  const eliminarValor = (id) => {
    try {
      const nuevoValorAlmacenado = [...valorAlmacenado] // clona el array
      const indice = nuevoValorAlmacenado.findIndex(item = item.id === id) // busco indice del producto que están queriendo eliminar dentro del array clonado
      nuevoValorAlmacenado.splice(indice, 1) // busco dentro del array clonado, el producto y lo borro
      console.log(nuevoValorAlmacenado) // tengo todo el array del estado menos el prosducto eliminado
      setValorAlmacenado(nuevoValorAlmacenado)
      window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado))
    } catch (error) {
      console.error(`Error al eliminar ${clave} del localstorage con ${id} del producto ${error}`)
    }
  }

  const limpiarValores = () => {
    window.localStorage.clear()
    window.localStorage.setItem(clave, JSON.stringify(valorInicial))
    setValorAlmacenado(valorInicial)
  }

  return [ guardarValor, eliminarValor, limpiarValores, valorAlmacenado ]
}

