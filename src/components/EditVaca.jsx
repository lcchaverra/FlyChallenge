import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { collection ,getDoc, updateDoc, doc, getDocs} from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase';
import { async } from '@firebase/util'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const EditVaca = () => {

        // Configurar Hooks
        const [codigo,setcodigo]= useState([])
        const [cargo,setcargo]= useState([])
        const [empresa,setempresa]= useState([])
        const [descripcion,setdescripcion]= useState([])
        const [salario, setsalario]= useState([])
        const [estado,setestado]= useState([])
        const [asignar, setasignar]= useState([])

        // Hook para usuario
        const [users, setUsers] = useState([]);

        //referencia a la DB
        const usersCollection = collection (db, "users");
    
        //Funcion para mostrar todos los Docs
        const getUsers = async () => {
        const data = await getDocs(usersCollection)
        const usersData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setUsers(usersData)
        console.log(usersData.map(user => user.Nombres))  
        }
        // getUsers()
        
        const navigate = useNavigate()
        const {id} = useParams()
        
        const update = async (e) => {
            e.preventDefault()
            const user = doc(db,"vacantes", id)
            const data = {codigo: codigo, cargo: cargo, descripcion: descripcion, empresa: empresa, salario: salario, estado: estado, asignar: asignar}
            await updateDoc(user,data)
            
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Sus datos se han actualizado con exito',
                showConfirmButton: false,
                timer: 1500
            })
            
            navigate('../ModuleVaca')
        }
        
        const getUserById = async (id)=>{
            const user = await getDoc(doc(db,"vacantes", id))
            if(user.exists()){
                setcodigo(user.data().codigo)
                setcargo(user.data().cargo)
                setdescripcion(user.data().descripcion)
                setempresa(user.data().empresa)
                setsalario(user.data().salario)
                setestado(user.data().estado)
                setasignar(user.data().asignar)
                
            }
            else{
                console.log('No existe')
            }
        }
        
        useEffect( ()=>{
            getUserById(id)
            setUsers()
        },[])
        
        return (
            <>
            <h2 className="title">Aplicacion de Vacantes</h2>
            <div className="main-container">
                <form onSubmit={update}>
                    <div className="grid-form-container">
    
                        <div className="form-item">
                            <label htmlFor="codigo">Codigo</label>
                            <input disabled required maxLength="5" pattern='[A-Z,0-9]+' value={codigo} onChange={(e)=>setcodigo(e.target.value)} type="text"></input>
                        </div>
    
                        <div className="form-item">
                            <label htmlFor="cargo">Cargo</label>
                            <input disabled  required maxLength="60" pattern='[A-Z, a-z,ñ,á,é,í,ó,ú,ý,     Á,É,Í,Ó,Ú,Ý]+' value={cargo} onChange={(e)=>setcargo(e.target.value)} type="text"></input>
                        </div>
    
                        <div className="form-item">
                            <label htmlFor="descripcion">Descripcion</label>
                            <input disabled  required maxLength="200" pattern='[A-Z, a-z,ñ,á,é,í,ó,ú,ý,Á,É,Í,Ó,Ú,Ý,0-9]+' value={descripcion} onChange={(e)=>setdescripcion(e.target.value)} type="text"></input>
                        </div>
    
                        <div className="form-item">
                            <label htmlFor="empresa">Empresa</label>
                            <input disabled  required maxLength="60" pattern='[A-Z, a-z,ñ,á,é,í,ó,ú,ý,Á,É,Í,Ó,Ú,Ý,0-9]+' value={empresa} onChange={(e)=>setempresa(e.target.value)} type="text"></input>
                        </div>
                        <div className="form-item">
                            <label htmlFor="salario">Salario</label>
                            <input disabled  required  pattern='[0-9,.]+' value={salario} onChange={(e)=>setsalario(e.target.value)} type="text"></input>
                        </div>
                        
                        <div className="form-item">
                            <select className='select-2' multiple value={estado} onChange={(e) => setestado(Array.from(e.target.selectedOptions, (option) => option.value))}>
                                <option className='option-2' value="Activo" >Activo</option>
                                <option className='option-2' value="Ocupado">Ocupado</option>
                            </select>
                        </div>
    
                        <div className="form-item">
                            <label >asignar  </label>
                            <input value={asignar} onChange={(e)=>setasignar(e.target.value)} type="text"></input>
                        </div>

                        {/* usersData.map(user => user.Nombres) */}
                        {/* <select>
                        {usersData.map((user) => (
                              <option className='option-2' value={user.Nombres}>{user.Nombres}</option>  
                             ))}
                        </select> */}
                            {/* // <tr key={user.id}>
                            //     <td>{user.TipoDocument}</td>
                            //     <td>{user.Documento}</td>
                            //     <td>{user.Nombres}</td>
                            //     <td>{user.Apellidos}</td>
                            //     <td>{user.Fecha}</td>
                            //     <td>{user.Profesion}</td>
                            //     <td>{user.Aspiracion}</td>
                            //     <td>{user.Correo}</td>
                            // </tr> */}
                            

                        {/* <div className="form-item">
                        <label >asignar Aspirante</label>
                            <select className='select-2' multiple value={estado} onChange={(e) => setestado(Array.from(e.target.selectedOptions, (option) => option.value))}>
                                <option className='option-2' value="Activo" >Activo</option>
                            </select>
                        </div> */}

                        
                    </div>
                        <div className="form-item">
                            <button className="button" type="submit">Actualizar Estado de Vacante</button>
                        </div>
                    </form>
                        <div className="section-divider"></div>
                </div>
            </>
        )
    }
    
    export default EditVaca