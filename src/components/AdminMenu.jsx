import React from 'react'
import { Link } from "react-router-dom";

function AdminMenu() {
    return (
        <>
            <nav className="main-nav" id="main-nav">
                <ul className="main-menu">
                    <li className="main-menu__item"><Link to="/" className="main-menu__link">Cerra Sesion</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default AdminMenu
