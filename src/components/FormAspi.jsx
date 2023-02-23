import React from 'react'

const FormAspi = () => {
  return (
    <>
    <h2 className='title'>Modulo De Aspirantes</h2>
            <table class="table">
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
                        <tr>
                        <th scope="row">CC</th>
                        <td>1193223824</td>
                        <td>Luis Carlos</td>
                        <td>Chaverra Córdoba</td>
                        <td>15/10/2000</td>
                        <td>Frontend Developer</td>
                        <td>...</td>
                        <td>lucas.cordoba1510@gmail.com</td>
                            <td>
                                <button type="button" class="btn btn-success">Actualizar</button>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>

                        <tr>
                        <th scope="row">CC</th>
                        <td>123456789</td>
                        <td>Andrés Phelipe</td>
                        <td>Córdoba Mena</td>
                        <td>07/05/1600</td>
                        <td>Backend Developer</td>
                        <td>...</td>
                        <td>aguacateexplosivo2@gmail.com</td>
                            <td>
                                <button type="button" class="btn btn-success">Actualizar</button>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
    </>
  )
}

export default FormAspi
