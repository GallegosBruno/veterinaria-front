import "./HomeInfoBox.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faInfoCircle, faClock } from '@fortawesome/free-solid-svg-icons';

const HomeInfoBox = () => {
    return (
      <>
        <div className="container-fluid boxBackground d-flex justify-content-evenly p-1">
            <div className="row">
                <div className="col">
                    <InfoBit title="Envios" subtitle="Realizamos envios a toda la provincia"/>
                </div>
                <div className="col">
                    <InfoBit title="Dedicacion" subtitle="Recibi asesoria sobre el producto que mas le conviene a tu mascota" />
                </div>
                <div className="col">
                    <InfoBit title="Disponibilidad" subtitle="Contactanos de Lunes a Sabado" subtitle2="de 9:00hs a 13:30hs" subtitle3="y 15:00hs a 20:00hs" />
                </div>
            </div>
        </div>
      </>
    );
  };
  const InfoBit= ({title, subtitle, subtitle2, subtitle3}) =>{
    return (
        <>
          <div className="infoBit pt-2 pb-1">
            <div className="text-center">
              {title === 'Envios' && <FontAwesomeIcon icon={faShippingFast} size="3x" className="iconInfo"/>}
              {title === 'Dedicacion' && <FontAwesomeIcon icon={faInfoCircle} size="3x" className="iconInfo" />}
              {title === 'Disponibilidad' && <FontAwesomeIcon icon={faClock} size="3x" className="iconInfo"/>}
              <div className="boxTitle">{title}</div>
            </div>
            <div className="text-center boxSubtitle">{subtitle}</div>
            {subtitle2 && <div className="text-center boxSubtitle">{subtitle2}</div>}
            {subtitle3 && <div className="text-center boxSubtitle">{subtitle3}</div>}
          </div>
        </>
      );
  }
  
  export default HomeInfoBox;
  