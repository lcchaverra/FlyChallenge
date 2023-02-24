import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {collection, getDocs, getDoc, doc} from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase';


export const ApliVaca = () => {

    //Configuracion de hooks
    const [vacantes, setVacantes] = useState([]);

    //referencia a la DB
    const vacantesCollection = collection (db, "vacantes");

    //Funcion para mostrar todos los Docs
    const getVacantes = async () => {
      const data = await getDocs(vacantesCollection)
      const vacantesData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      setVacantes(vacantesData)
    }
    
    //Uso de useEffect
    useEffect(()=>{getVacantes()}, [])

  return (
    <div>
        {/* <div className="main-container"> */}
            <div className='table-responsive'>
                <h2 className='title'>Aplicar vacantes</h2>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col">Cargo</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Empresa</th>
                            <th scope="col">Salario</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Persona a cargo</th>
                            <td scope='col'>Acciones</td>
                            </tr>
                        </thead>
                        <tbody>
                            {vacantes.map((vacantes) => (
                                <tr key={vacantes.id}>
                                    <td>{vacantes.codigo}</td>
                                    <td>{vacantes.cargo}</td>
                                    <td>{vacantes.descripcion}</td>
                                    <td>{vacantes.empresa}</td>
                                    <td>{vacantes.salario}</td>
                                    <td>{vacantes.estado}</td>
                                    <td>{vacantes.asignar}</td>
                                    <td>
                                    <Link to={`/src/components/EditVaca/${vacantes.id}`}><i className="fi fi-rr-user-add Button-Icon-2">Postular</i></Link>
                                    {/* <button onClick={()=> {confirmDelete(vacantes.id)}} className='Button-Icon'><i className="fi fi-rr-trash"></i></button> */}
                                    </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
            </div>
        {/* </div> */}
    </div>
  )
}




