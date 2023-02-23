import React from "react";

const FormVacaOfert = () => {
    return (
        <>
        <h2 className="title">Gestor de Vacantes</h2>
        <div className="main-container">
            <form action="/">
                <div className="grid-form-container">

                    <div className="form-item">
                        <label htmlFor="codigo">Codigo</label>
                        <input type="text" id="codigo" />
                    </div>

                    <div className="form-item">
                        <label htmlFor="cargo">Cargo</label>
                        <input type="text" id="cargo" />
                    </div>

                    <div className="form-item">
                        <label htmlFor="descripcion">Descripcion</label>
                        <input type="text" id="descripcion" />
                    </div>

                    <div className="form-item">
                        <label htmlFor="empresa">Empresa</label>
                        <input type="text" id="empresa" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="salario">Salario</label>
                        <input type="text" id="salario" />
                    </div>

                </div>
                    <div className="form-item">
                        <button className="button" type="submit">Registrar Vacante</button>
                    </div>
                </form>
                    <div className="section-divider"></div>
            </div>
        </>
    )
}

export default FormVacaOfert