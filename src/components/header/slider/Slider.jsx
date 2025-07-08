import { useState } from 'react'
import './Slider.scss'

const sliderImages = [
  '/image-slider/slider-1.jpg',
  '/image-slider/slider-2.jpg',
  '/image-slider/slider-3.jpg',
  '/image-slider/slider-4.jpg',
  '/image-slider/slider-5.jpg',
]

const Slider = () => {
  const [current, setCurrent] = useState(0)
  const total = sliderImages.length

  const goPrev = () => setCurrent(current === 0 ? total - 1 : current - 1)
  const goNext = () => setCurrent(current === total - 1 ? 0 : current + 1)

  return (
    <div className='slider' style={{ backgroundImage: `url(${sliderImages[current]})` }}>
      <button className='slider__arrow slider__arrow--left' onClick={goPrev} aria-label='Anterior'>&#8592;</button>
      <button className='slider__arrow slider__arrow--right' onClick={goNext} aria-label='Siguiente'>&#8594;</button>
      <div className='slider__dots'>
        {sliderImages.map((_, idx) => (
          <span
            key={idx}
            className={`slider__dot${idx === current ? ' slider__dot--active' : ''}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider