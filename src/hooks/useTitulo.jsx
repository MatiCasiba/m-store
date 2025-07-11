import { useEffect } from 'react'

const useTitulo = (textoTitulo = 'Sin título') => {
  useEffect(() => {
    document.title = `Meledeco - ${textoTitulo}`
  }, [])
}

export default useTitulo