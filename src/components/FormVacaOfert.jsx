import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {collection, addDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase';
import { async } from '@firebase/util'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const FormVacaOfert = () => {
        // Configurar Hooks
        const [codigo,setcodigo]= useState([])
        const [cargo,setcargo]= useState([])
        const [descripcion,setdescripcion]= useState([])
        const [empresa, setempresa]= useState([])
        const [salario,setsalario]= useState([])
        const [estado, setestado]= useState([])
        const [asignar,setasignar]= useState([])

        const navigate = useNavigate()

        const usersCollection = collection (db, "vacantes");

        const lisvacantes = async (e) => {
            e.preventDefault()
            await addDoc(usersCollection, {codigo: codigo, cargo: cargo, descripcion: descripcion, empresa: empresa, salario: salario, estado: estado, asignar: asignar})
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Sus datos se han registrado con exito',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('../ModuleVaca')
        }

    return (
        <>
        <h2 className="title">Gestor de Vacantes</h2>
        <div className="main-container">
            <form onSubmit={lisvacantes}>
                <div className="grid-form-container">

                    <div className="form-item">
                        <label htmlFor="codigo">Codigo</label>
                        <input required maxLength="5" pattern='[A-Z,0-9]+' value={codigo} onChange={(e)=>setcodigo(e.target.value)} type="text"></input>
                    </div>

                    <div className="form-item">
                        <label htmlFor="cargo">Cargo</label>
                        <input required maxLength="60" pattern='[A-Z, a-z,ñ,á,é,í,ó,ú,ý,     Á,É,Í,Ó,Ú,Ý]+' value={cargo} onChange={(e)=>setcargo(e.target.value)} type="text"></input>
                    </div>

                    <div className="form-item">
                        <label htmlFor="descripcion">Descripcion</label>
                        <input required maxLength="200" pattern='[A-Z, a-z,ñ,á,é,í,ó,ú,ý,Á,É,Í,Ó,Ú,Ý,0-9]+' value={descripcion} onChange={(e)=>setdescripcion(e.target.value)} type="text"></input>
                    </div>

                    <div className="form-item">
                        <label htmlFor="empresa">Empresa</label>
                        <input required maxLength="60" pattern='[A-Z, a-z,ñ,á,é,í,ó,ú,ý,Á,É,Í,Ó,Ú,Ý,0-9]+' value={empresa} onChange={(e)=>setempresa(e.target.value)} type="text"></input>
                    </div>
                    <div className="form-item">
                        <label htmlFor="salario">Salario</label>
                        <input required  pattern='[0-9,.]+' value={salario} onChange={(e)=>setsalario(e.target.value)} type="text"></input>
                    </div>
                    
                    <div className="form-item">
                        <select className='select-2' multiple value={estado} onChange={(e) => setestado(Array.from(e.target.selectedOptions, (option) => option.value))}>
                            <option className='option-2' value="Activo" >Activo</option>
                            <option className='option-2' value="Ocupado">Ocupado</option>
                        </select>
                    </div>

                    <div className="form-item">
                        <label hidden>asignar</label>
                        <input hidden  value={asignar} onChange={(e)=>setasignar(e.target.value)} type="text"></input>
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