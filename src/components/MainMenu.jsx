import React from 'react'
import { Link } from "react-router-dom";
function MainMenu() {
    return (
        <>
            <nav className="main-nav" id="main-nav">
                <ul className="main-menu">
                <li className="main-menu__item"><Link to="/" className="main-menu__link">Inicio</Link></li>
                    <li className="main-menu__item"><Link to="/RegUserPage" className="main-menu__link">Registro</Link></li>
                    <li className="main-menu__item"><Link to="/" className="main-menu__link">Admin. Aspirante</Link></li>
                    <li className="main-menu__item"><Link to="/RegVaPage" className="main-menu__link">Reg. Vacantes</Link></li>
                    <li className="main-menu__item"><Link to="/" className="main-menu__link">Admin. Vacantes</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default MainMenu
