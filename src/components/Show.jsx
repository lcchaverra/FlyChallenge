import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {collection, getDocs, getDoc, deleteDoc, doc} from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { async } from '@firebase/util'

// Funcion para eliminar documento
const MySwall = withReactContent(Swal);

export const Show = () => {

    //Configuracion de hooks
    const [users, setUsers] = useState([]);

    //referencia a la DB
    const usersCollection = collection (db, "users");

    //Funcion para mostrar todos los Docs
    const getUsers = async () => {
      const data = await getDocs(usersCollection)
      const usersData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      setUsers(usersData)
      // console.log(usersData)  
    }
    

    //Funcion para eliminar doc
    const deleteUser = async (id) => {
      const userDoc = doc(db,"users", id)
      await deleteDoc(userDoc)
      getUsers()
    }

    //Funcion para confirmacion de sweet alert
    const confirmDelete = (id) => {
      Swal.fire({
        title: 'Está Segur@?',
        text: "No hay Forma de Revertirlo",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminarlo!'
      }).then((result) => {
        if (result.isConfirmed) {
          deleteUser(id)
          Swal.fire(
            'Eliminado!',
            'El Dato ha sido Eliminado',
            'Exito'
          )
        }
      })
    }

    //Uso de useEffect
    useEffect(()=>{
        getUsers()
    }, [])

  return (
    <div className='table-responsive'>
      <h2 className='title'>Modulo De Aspirantes</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Tipo de Documento</th>
              <th scope="col">Documento</th>
              <th scope="col">Nombres</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Fecha de Nacimiento</th>
              <th scope="col">Profesion</th>
              <th scope="col">Aspiracion Salarial</th>
              <th scope="col">E-Mail</th>
              <td scope='col'>Acciones</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.TipoDocument}</td>
                <td>{user.Documento}</td>
                <td>{user.Nombres}</td>
                <td>{user.Apellidos}</td>
                <td>{user.Fecha}</td>
                <td>{user.Profesion}</td>
                <td>{user.Aspiracion}</td>
                <td>{user.Correo}</td>
                <td>
                  <Link to={`/src/components/Edit/${user.id}`}><i className="fi fi-rr-pencil"></i></Link>
                  <button onClick={()=> {confirmDelete(user.id)}} className='Button-Icon'><i className="fi fi-rr-trash"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}
