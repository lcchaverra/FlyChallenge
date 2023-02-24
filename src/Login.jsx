import React, { useState } from 'react';
import { auth } from './firebaseConfig/firebase';
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import HelpPeopleImg from '/src/img/helpblue.png';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Su seccion se ha iniciado con exito ',
          showConfirmButton: false,
          timer: 1500
        })
        navigate('/Dashboard')
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error de autenticacion, por favor inicia seccion de nuevo.',
          width: 600,
          padding: '3em',
          color: '#716add',
          background: '#fff url(/images/trees.png)',
          backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `
        })
        console.log(error);
      });
  };

  return (
    <>
    <h2 className='title'>Login</h2>
        <div className="form-container-styled">
          <form onSubmit={handleSubmit}>

            <img src={HelpPeopleImg} alt="Logo HelpPeople" />

            <div className="form-item">
              <label>Correo/Usuario:</label>
              <input className='Large-Imput' ype="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
              <br />
              
            <div className="form-item">
              <label>Contraseña:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
              <br />
              
            <div className="form-item">
              <button className='button' type="submit">Iniciar Sesion</button>
              <Link to="/"><i className="Button-Icon-2">Volver</i></Link>
            </div>

          </form>
      </div>
    </>
  );
};

export default Login;