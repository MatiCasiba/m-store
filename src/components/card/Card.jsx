import './Card.scss';

const Card = ({producto}) => {
  return (
    <div className="card">
      <article className='card__article'>
        <div className="card__image-container">
          <img className='card__image' src={producto.foto} alt={producto.nombre} />
          <div className="card__content">
            <h2 className='card__heading'>{producto.nombre}</h2>
            <div className="card__description">
              <p className='card__text'>{producto.descripcion}</p>
            </div> {/* __description */}
            <p className='card__precios'>{producto.precio}</p>
          </div> {/* __content */}
        </div> {/* __image-container */}
      </article>
    </div>
  )
}

export default Card