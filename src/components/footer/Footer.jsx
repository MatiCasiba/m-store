import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="content-footer">

          <div className="content-footer__empresa">
            <div className="content-footer__logo-eslogan">
              <img className='content-footer__logo-footer' src="/logo/me-logo.png" alt="logo meledeco" />
              <h2 className='content-footer__titulo-footer'>Meledeco</h2>
              <p className='content-footer__eslogan'>Ama Sonríe y disfruta</p>
            </div> {/* content-footer__logo-eslogan */}

            <div className="content-footer__logo-redes">
              <a href="..." target="_blank" title="Marta Ibañez">
                <img className="content-footer__loguito"  src="/icons-footer/instagram-icon.png" alt="logo instagram" />
              </a> {/* instagram */}
              <a href="" target='_blank' title='whatsapp'>
                <img className="content-footer__loguito" src="/icons-footer/whatsapp-icon.png" alt="logo whatsapp" />
              </a> {/* whatsapp */}
              <a href="mailto:..." target="_blank" title="correo">
                <img className="content-footer__loguito"  src="/icons-footer/mail-icon.png" alt="logo email" />
              </a> {/* email */}
            </div>
          </div> {/* content-footer__empresa */}
            
            <div className="content-footer__pays">
              <div className="content-footer__tarjetas-info">
                <img className="content-footer__icons" src="/icons-footer/delivery-icon.png" alt="imagen casa" />
                <p className="content-footer__text-info">¿Te interesó algo? ¡Te llevamos el producto que has elegido!</p>
              </div>

              <div className="content-footer__tarjetas-info">
                <img className="content-footer__icons" src="/icons-footer/icon-cards.webp" alt="imagen tarjeta de pago" />
                <p className="content-footer__text-info">Pagá con transferencia o en efectivo, elije la opción que más te convenga.</p>
              </div> {/* content-footer__tarjetas-info */}
            </div> {/* content-footer__pays */}

          <div className="content-footer__content-cardLogos">
            <img src="/icons-footer/visa-icon.png" alt="imagen tarjeta visa" className="content-footer__logos-pays" />            
            <img src="/icons-footer/mastercard.png" alt="imagen tarjeta mastercard" className="content-footer__logos-pays" />
            <img src="/icons-footer/mercado-pago.png" alt="imagen mercado pago" className="content-footer__logos-pays" />
          </div> {/* content-footer__content-cardLogos */}

          <div className="content-footer__copyright">
            <small>&copy; {new Date().getFullYear()} Meledeco. Todos los derechos reservados.</small>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer