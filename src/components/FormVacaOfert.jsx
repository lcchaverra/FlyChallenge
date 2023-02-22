import React from "react";

const FormVacaOfert = () => {
    return (
        <>
        <h2 className="title">Gestor de Vacantes</h2>
        <div className="main-container">
            <form action="/">
                <div className="grid-form-container">

                    <div className="form-item">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="email">Correo</label>
                        <input type="email" id="email" />
                    </div>

                    <div className="form-item">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="email">Correo</label>
                        <input type="email" id="email" />
                    </div>

                </div>
                    <div className="form-item">
                        <button className="button" type="submit">Enviar</button>
                    </div>
                </form>
                    <div className="section-divider"></div>
            </div>
        </>
    )
}

export default FormVacaOfert