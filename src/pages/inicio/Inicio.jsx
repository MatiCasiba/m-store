import './Inicio.scss'
import { useContext, useEffect, useState } from 'react'
import ProductosContext from '../../context/ProductosContext'
import Card from '../../components/card/Card'
import Slider from '../../components/header/slider/Slider'
import Spinner from '../../components/spinner/Spinner'


const Inicio = () => {
  
  const {productos} = useContext(ProductosContext)

  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    if(productos && productos.length > 0) {
      setTimeout(()=> setCargando(false), 1000) // simula una carga de 1 segundo
    }
  }, [productos])

  return (
    <>
      {cargando ? (
        <Spinner />
      ) : (
        <main>
          <Slider />
          <section className="section-cards">
            <header className="section-cards__header">
              <h1>Nuestros productos:</h1>
              <p>Perfumes - Jabones - Adornos - Relojes - Velas</p>
            </header>
          </section> 

          <section className="cards-container" id="container-productos">
            {productos && productos.map((producto) => (
              <Card producto={producto} key={producto.id} />
            ))}
          </section>
        </main>
      )}
    </>
  )
}

export default Inicio