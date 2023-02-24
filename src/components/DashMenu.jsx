import React from 'react'
import { Link } from "react-router-dom";

function DashMenu() {
    return (
        <>
            <nav className="admin-nav" id="main-nav">
                <ul className="admin-menu">
                    <li className="main-menu__item"><Link to="/ModuleAspi" className="main-menu__link">Admin. Aspirante</Link></li>
                    <li className="main-menu__item"><Link to="/RegVaPage" className="main-menu__link">Reg. Vacantes</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default DashMenu
