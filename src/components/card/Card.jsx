
const Card = ({producto}) => {
  
  return (
    <>
      <div className="card">
        <article className='card__article'>
          <div className="card__image-container">
            <img className='card__image' src={producto.foto} alt={producto.nombre} />
          </div>
          <div className="card__content">
            <h2 className='card__heading'>{producto.nombre}</h2>
            <p className='card__precios'>{producto.precio}</p>
            <div className="card__description">
              <p className='card__text'>{producto.descripcion}</p>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

export default Card