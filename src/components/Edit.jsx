import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { collection ,getDoc, updateDoc, doc} from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase';
import { async } from '@firebase/util'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Edit = () => {

        // Configurar Hooks
        const [tipoDocumento,setTipoDocumento]= useState([])
        const [documento,setDocumento]= useState([])
        const [nombres,setNombres]= useState([])
        const [apellidos, setApellidos]= useState([])
        const [fecha,setFecha]= useState([])
        const [profesion, setProfesion]= useState([])
        const [aspiracion,setAspiracion]= useState([])
        const [correo,setCorreo]= useState([])
    
        const navigate = useNavigate()
        const {id} = useParams()

        const update = async (e) => {
            e.preventDefault()
            const user = doc(db,"users", id)
            const data = {TipoDocument: tipoDocumento, Documento: documento, Nombres: nombres, Apellidos: apellidos, Fecha: fecha, Profesion: profesion, Aspiracion: aspiracion, Correo: correo}
            await updateDoc(user,data)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Sus datos se han actualizado con exito',
                showConfirmButton: false,
                timer: 1500
            })

            navigate('../ModuleAspi')
        }

        const getUserById = async (id)=>{
            const user = await getDoc(doc(db,"users", id))
            if(user.exists()){
                setTipoDocumento(user.data().TipoDocument)
                setDocumento(user.data().Documento)
                setNombres(user.data().Nombres)
                setApellidos(user.data().Apellidos)
                setCorreo(user.data().Correo)
                setFecha(user.data().Fecha)
                setProfesion(user.data().Profesion)
                setAspiracion(user.data().Aspiracion)
            }
            // ?console.log(user.data())
            else{
                console.log('No existe')
            }
        }

        useEffect( ()=>{
            getUserById(id)
        },[])
    
        // const usersCollection = collection (db, "users");
    
        // const listUser = async (e) => {
        //     e.preventDefault()
        //     await addDoc(usersCollection, {TipoDocument: tipoDocumento, Documento: documento, Nombres: nombres, Apellidos: apellidos, Fecha: fecha, Profesion: profesion, Aspiracion: aspiracion, Correo: correo})
        //     navigate('../ModuleAspi')
        //     }

    return (
        <>
        <h2 className="title">Editar Usuario</h2>
        <div className="main-container-2">
            <form onSubmit={update}>
                <div className="grid-form-container">

                    <div className="form-item">
                        <label>Tipo de documento:
                            <select disabled multiple value={tipoDocumento} onChange={(e) => setTipoDocumento(Array.from(e.target.selectedOptions, (option) => option.value))}>
                                <option value="cc" >Cedula de ciudadania </option>
                                <option value="ce">Cedula extranjera</option>
                                <option value="p">Pasaporte</option>
                                <option value="ti">Targeta de identidad </option>
                            </select>

                        </label>
                    </div>

                    <div className="form-item">
                        <label >Cedula:</label>
                        < input disabled required maxLength="11" pattern='[0-9]+' value={documento} onChange={(e)=>setDocumento(e.target.value)} type="text"></input>
                    </div>

                    <div className="form-item">
                        <label>Nombres:</label>
                        <input required maxLength="32" pattern='[A-Z, a-z,ñ,á,é,í,ó,ú,ýÁ,É,Í,Ó,Ú,Ý]+' value={nombres} onChange={(e)=>setNombres(e.target.value)} type="text"></input>
                    </div>

                    <div className="form-item">
                        <label>Apellidos:</label>
                        <input required maxLength="32" pattern='[A-Z, a-z,ñ,á,é,í,ó,ú,ýÁ,É,Í,Ó,Ú,Ý]+' value={apellidos} onChange={(e)=>setApellidos(e.target.value)} type="text"></input>
                    </div>

                    <div className="form-item">
                        <label>Fecha:</label>
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
                        <label>Correo:</label>
                        <input required maxLength="60"  value={correo} onChange={(e)=>setCorreo(e.target.value)} type="email"></input>
                    </div>

                </div>
                    <div className="form-item">
                        <button className="button" type="submit">Editar Registro</button>
                    </div>
                </form>
                    <div className="section-divider"></div>
            </div>
        </>
    )
}

export default Edit