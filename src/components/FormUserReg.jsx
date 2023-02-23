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
                        <label >Cedula:</label>
                        < input pattern='[0-9]+ ' placeholder='Cedula'></input>
                    </div>

                    <div className="form-item">
                        <label>Nombres:</label>
                        <input pattern='[A-Z, a-z,ñ]+ ' placeholder='Nombres'></input>
                    </div>

                    <div className="form-item">
                        <label>Apellidos:</label>
                        <input pattern='[A-Z,a-z,ñ]+ ' placeholder='Apellidos'></input>
                    </div>

                    <div className="form-item">
                        <label>Fecha:</label>
                        <input pattern='[0-9,/,-]+ ' placeholder='Fecha' type="date"></input>
                    </div>

                    <div className="form-item">
                        <label>Profesion:</label>
                        <input pattern='[A-Z,a-z,ñ]+ ' placeholder='Profesion'></input>
                    </div>

                    <div className="form-item">
                        <label>Aspiracion salarial:</label>
                        <input placeholder='Aspiracion salarial' type="text"></input>
                    </div>

                    <div className="form-item">
                        <label>Correo:</label>
                        <input placeholder='Correo' type="email"></input>
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