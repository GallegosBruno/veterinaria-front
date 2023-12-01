const InsuranceBox=()=>{
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col border p-2"><InsPlan titulo="Primeros Pasos" detalles="Covertura para mascotas de 0-5 años" precio="2000$/Mes"/></div>
                    <div className="col border p-2"><InsPlan titulo="Madurando" detalles="Covertura para mascotas de 5-10 años" precio="3000$/Mes"/></div>
                    <div className="col border p-2"><InsPlan titulo="Adultos" detalles="Covertura para mascotas de 10 para arriba" precio="1500$/Mes"/></div>
                </div>
            </div>
        </>
    )
}
const InsPlan=({titulo,precio,detalles})=>{
    return(
        <>
            <div className="fs-4">{titulo}</div>
            <div>{detalles}</div>
            <div className="d-flex align-self-end justify-content-between">
                <div>{precio}</div>
                <div className="flex-end me-1"><a className="button-primary" href="">Detalles</a></div>
            </div>
        </>
    )
}

export default InsuranceBox