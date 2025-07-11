import './Categoria.scss'
import React, { useState } from 'react'
import productos from '../../data/productos'
import Card from '../../components/card/Card'

const Categoria = () => {
  const [selected, setSelected] = useState('')

  const handleSelect = (cat) => setSelected(cat)

  // Relación entre el nombre del botón y el valor en productos.js
  const categoriasMap = {
    hogar: 'Hogar',
    decoraciones: 'Decoración',
    perfumes: 'Perfumes',
    velas: 'Velas',
  }

  // Filtrar productos según la categoría seleccionada
  const productosFiltrados = selected ? productos.filter(p => p.categoria === categoriasMap[selected]) : []

  return (
    <div className="categoria-container">
      <h2 className="categoria-title">Selecciona una categoría</h2>
      <ul className="categoria-menu">
        <li>
          <button className={selected === 'hogar' ? 'categoria-menu__item active' : 'categoria-menu__item'} onClick={() => handleSelect('hogar')}>Hogar</button>
        </li>
        <li>
          <button className={selected === 'decoraciones' ? 'categoria-menu__item active' : 'categoria-menu__item'} onClick={() => handleSelect('decoraciones')}>Decoraciones</button>
        </li>
        <li>
          <button className={selected === 'perfumes' ? 'categoria-menu__item active' : 'categoria-menu__item'} onClick={() => handleSelect('perfumes')}>Perfumes</button>
        </li>
        <li>
          <button className={selected === 'velas' ? 'categoria-menu__item active' : 'categoria-menu__item'} onClick={() => handleSelect('velas')}>Velas</button>
        </li>
      </ul>
      <div className="cards-container">
        {!selected && <p className="categoria-msg">Elige una categoría para ver los productos.</p>}
        {selected && productosFiltrados.length === 0 && <p className="categoria-msg">No hay productos en esta categoría.</p>}
        {productosFiltrados.map(producto => (
          <Card key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  )
}

export default Categoria