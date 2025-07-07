import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="content-footer">

          <div className="content-footer__empresa">
            <div className="content-footer__logo-eslogan">
              <img src="public/logo/me-logo.png" alt="logo meledeco" />
              <h2 className='content-footer__titulo-footer'>Meledeco</h2>
              <p className='content-footer__eslogan'>Aromas y Manualidades</p>
            </div> {/* content-footer__logo-eslogan */}

            <div className="content-footer__logo-redes">
              <a href="..." target="_blank" title="Marta Ibañez">
                <img className="content-footer__loguito"  src="/icons-footer/instagram-icon.png" alt="logo instagram" />
              </a> {/* instagram */}
              <a href="" target='_blank' title='whatsapp'>
                <img src="/icons-footer/whatsapp-icon.png" alt="logo whatsapp" />
              </a> {/* whatsapp */}
            </div>
            
            <div className="content-footer__pays">
              <div className="content-footer__tarjetas-info">
                <img className="content-footer__icons" src="/icons-footer/icon-cards.webp" alt="imagen tarjeta de pago" />
                <p className="content-footer__text-info">Pagá con transferencia o en efectivo</p>
              </div> {/* content-footer__tarjetas-info */}
            </div> {/* content-footer__pays */}
          </div>

          <div className="content-footer__content-cardLogos">
            <img src="/icons-footer/visa-icon.png" alt="imagen tarjeta visa" className="content-footer__logos-pays" />
            <img src="/icons-footer/american-express-icon.png" alt="imagen tarjeta american express" className="content-footer__logos-pays" />
            <img src="/icons-footer/mastercard.png" alt="imagen tarjeta mastercard" className="content-footer__logos-pays" />
            <img src="/icons-footer/paypal-icon.png" alt="imagen paypal" className="content-footer__logos-pays" />
          </div> {/* content-footer__content-cardLogos */}

        </div>
      </footer>
    </>
  )
}

export default Footer