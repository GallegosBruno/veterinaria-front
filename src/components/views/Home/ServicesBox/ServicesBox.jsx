import "./ServicesBox.css"
import dogGrooming from "../../../../Assets/dogGrooming.jpg"
import adoptedCat from "../../../../Assets/adoptedCat.jpg"
import dogWithMask from "../../../../Assets/dogWithMask.jpg"
import dogWithToy from "../../../../Assets/dogWithToy.jpg"
import dogFood from "../../../../Assets/dogFood.jpg"
const ServicesBox=()=>{
    return(
        <>
        <div className="serviceContainer">
            <div className="serviceHeader mx-auto mb-1">Servicios que ofrecemos</div>
            <div className="d-flex justify-content-evenly">
            <ServicesItem serviceName="Peluqueria" serviceImage={dogGrooming} />
            <ServicesItem serviceName="Juguetes" serviceImage={dogWithToy}/>
            <ServicesItem serviceName="Alimento" serviceImage={dogFood}/>
            <ServicesItem serviceName="Adopcion" serviceImage={adoptedCat}/>
            <ServicesItem serviceName="Consultas" serviceImage={dogWithMask}/>
            </div>
        </div>
        </>
    )
}

const ServicesItem=({serviceName,serviceImage})=>{
    return (
    <>
    <div className="serviceItem">
        <div className="serviceImgContainer">
            <img className="serviceImg" src={serviceImage} alt="" />
        </div>
        <div>{serviceName}</div>
    </div>
    </>
    )
}
export default ServicesBox