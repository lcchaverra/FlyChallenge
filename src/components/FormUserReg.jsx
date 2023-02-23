import React from "react";

const FormUserReg = () => {
    return (
        <>
        <h2 className="title">Registrar Usuario</h2>
        <div className="main-container-2">
            <form action="/">
                <div className="grid-form-container">

                    <div className="form-item">
                        <label>Tipo de documento:
                            <select placeholder='Tipo de documento' >
                                <option value="cc">Cedula de ciudadania </option>
                                <option value="ce">Cedula extranjera</option>
                                <option value="p">Pasaporte</option>
                                <option value="ti">Targeta de identidad </option>
                            </select>
                        </label>
                    </div>

                    <div className="form-item">
                        <label  >Cedula:< input  pattern='[0-9]+ ' placeholder='Cedula'  ></input></label>
                    </div>

                    <div className="form-item">
                        <label  >Nombres:< input pattern='[A-Z, a-z,ñ]+ ' placeholder='Nombres'  ></input></label>
                    </div>

                    <div className="form-item">
                        <label  >Apellidos:< input pattern='[A-Z,a-z,ñ]+ ' placeholder='Apellidos'></input></label>
                    </div>

                    <div className="form-item">
                        <label  >Fecha:< input pattern='[0-9,/,-]+ ' placeholder='Fecha' type="date"></input></label>
                    </div>

                    <div className="form-item">
                        <label  >Profesion:< input pattern='[A-Z,a-z,ñ]+ ' placeholder='Profesion'  ></input></label>
                    </div>

                    <div className="form-item">
                        <label  >Aspiracion salarial:< input placeholder='Aspiracion salarial'  type="text"></input></label>
                    </div>

                    <div className="form-item">
                        <label  >Correo:< input placeholder='Correo'  type="email"></input></label>
                    </div>

                </div>
                    <div className="form-item">
                        <button className="button" type="submit">Subir Registro</button>
                    </div>
                </form>
                    <div className="section-divider"></div>
            </div><br /><br /><br /><br />
        </>
    )
}

export default FormUserReg