import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {collection, addDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase';
import { async } from '@firebase/util'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const FormUserReg = () => {
    // Configurar Hooks
    const [tipoDocumento,setTipoDocumento]= useState([])
    const [documento,setDocumento]= useState([])
    const [nombres,setNombres]= useState([])
    const [apellidos, setApellidos]= useState([])
    const [fecha,setFecha]= useState([])
    const [profesion, setProfesion]= useState([])
    const [aspiracion,setAspiracion]= useState([])
    const [correo,setCorreo]= useState([])

        // const [tipoDocumento,setTipoDocumento,
        //     documento,setDocumento,
        //     nombres,setNombres,
        //     apellidos, setApellidos,
        //     fecha,setFecha,
        //     profesion, setProfesion,
        //     aspiracion,setAspiracion,
        //     correo,setCorreo]= useState([])

        const navigate = useNavigate()

        const usersCollection = collection (db, "users");

        const listUser = async (e) => {
            e.preventDefault()
            await addDoc(usersCollection, {TipoDocument: tipoDocumento, Documento: documento, Nombres: nombres, Apellidos: apellidos, Fecha: fecha, Profesion: profesion, Aspiracion: aspiracion, Correo: correo})
            // await addDoc(usersCollection, {TipoDocument: tipoDocumento, Documento: documento, Nombres: nombres, Apellidos: apellidos, Fecha: fecha, Profesion: profesion, Aspiracion: aspiracion, Correo: correo})
            // navigate('/src/components/Show')
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Sus datos se han registrado con exito',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('../ModuleAspi')
        }

    return (
        <>
        <h2 className="title">Registrar Usuario</h2>
        <div className="main-container-2">
            <form onSubmit={listUser}>
                <div className="grid-form-container">

                    <div className="form-item">
                        <label>Tipo de documento:
                            {/* <select value={Array.isArray(tipoDocumento) ? '' : tipoDocumento} onChange={(e)=>setTipoDocumento(e.target.value)} > */}
                            {/* <select value={tipoDocumento} onChange={(e)=>setTipoDocumento(e.target.value)} > */}
                                {/* <option value="cc">Cedula de ciudadania </option>
                                <option value="ce">Cedula extranjera</option>
                                <option value="p">Pasaporte</option>
                                <option value="ti">Targeta de identidad </option>
                            </select> */}

                            <select className='select' multiple value={tipoDocumento} onChange={(e) => setTipoDocumento(Array.from(e.target.selectedOptions, (option) => option.value))}>
                                <option value="cc" >Cedula de ciudadania </option>
                                <option value="ti">Targeta de identidad </option>
                                <option value="ce">Cedula extranjera</option>
                                <option value="p">Pasaporte</option>
                            </select>

                        </label>
                    </div>

                    <div className="form-item">
                        <label >Documento:</label>
                        < input required maxLength="11" pattern='[0-9]+' value={documento} onChange={(e)=>setDocumento(e.target.value)} type="text"></input>
                    </div>

                    <div className="form-item">
                        <label>Nombres:</label>
                        <input required maxLength="32" pattern='[A-Z, a-z,ñ,á,é,í,ó,ú,ý,Á,É,Í,Ó,Ú,Ý]+' value={nombres} onChange={(e)=>setNombres(e.target.value)} type="text"></input>
                    </div>

                    <div className="form-item">
                        <label>Apellidos:</label>
                        <input required maxLength="32" pattern='[A-Z, a-z,ñ,á,é,í,ó,ú,ý,Á,É,Í,Ó,Ú,Ý]+' value={apellidos} onChange={(e)=>setApellidos(e.target.value)} type="text"></input>
                    </div>

                    <div className="form-item">
                        <label>Fecha de Nacimiento:</label>
                        <input required value={fecha} onChange={(e)=>setFecha(e.target.value)} type="date"></input>
                    </div>

                    <div className="form-item">
                        <label>Profesion:</label>
                        <input required maxLength="60" pattern='[A-Z, a-z,ñ,á-ú,ý,Á-Ú,Ý]+' value={profesion} onChange={(e)=>setProfesion(e.target.value)} type="text"></input>
                    </div>

                    <div className="form-item">
                        <label>Aspiracion salarial:</label>
                        <input required  pattern='[0-9,.]+' value={aspiracion} onChange={(e)=>setAspiracion(e.target.value)} type="text"></input>
                    </div>

                    <div className="form-item">
                        <label>Correo Electrónico:</label>
                        <input required maxLength="60"  value={correo} onChange={(e)=>setCorreo(e.target.value)} type="email"></input>
                    </div>

                </div>
                    <div className="form-item">
                        <button className="button" type="submit">Cargar Registro</button>
                    </div>
                </form>
                    <div className="section-divider"></div>
            </div>
        </>
    )
}

export default FormUserReg