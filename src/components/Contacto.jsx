import {FiFacebook,} from 'react-icons/fi'
import {BsInstagram, BsFillGeoAltFill, BsFillEnvelopeOpenFill, BsWhatsapp}  from 'react-icons/bs'


export default function Contacto() {
    return (
        <>  
        <div  className="contacto">
        <div className="container">
        <div>
            <h1>Contáctenos</h1>
        <div className="row">
  
            <div className="col-lg-4 col-md-6">
              <div className="contacto-acerca">
                <h2>Seguinos en nuestras redes sociales</h2>
                <p>Suscribite para obtener recetas y
                  descuentos.</p>
                <div className="social-links">
                  <a href="#">< FiFacebook/> </a>
                  <a href="https://www.instagram.com/_pastaslau66/?hl=es"> <BsInstagram/> </a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6">
              <div className="info">
                <div className="icons">
                  <BsFillGeoAltFill />
                  <p>Intevu 8 casa 96
                    <br/>Rio Grande, Tierra del fuego, Argentina</p>
                </div>
  
                <div className="icons">
                  <BsFillEnvelopeOpenFill/>
                  <p>lauradelcarmenyacante@gmail.com</p>
                </div>
  
                <div className="iconsWhat">
                  <BsWhatsapp />
                  <p>2964-409819</p>
                </div> 
              </div>
            </div>
  

        </div>
        </div>
        </div>
        </div>

        
      
<div className="mapa">
    <h3> Encontrános!</h3>
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.7382915179433!2d-67.72361268432154!3d-53.79414411137466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc4b167ca833b4e5%3A0xde753c31465a3175!2sJ.%20B.%20Thorne%202094%2C%20R%C3%ADo%20Grande%2C%20Tierra%20del%20Fuego!5e0!3m2!1ses!2sar!4v1638845597513!5m2!1ses!2sar"
  style={{Border:"0"}} allowFullScreen="" loading="lazy"></iframe>
</div>
</>
    )
    }
    