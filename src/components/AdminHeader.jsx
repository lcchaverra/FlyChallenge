import React from 'react'
import AdminMenu from './AdminMenu'
import logo from '/src/img/help.png';
import '/src/styles/css/styles.css'

function AdminHeader() {
    return (
        <>
        <header className="main-header">
            <div className="main-logo">
                <img src={logo} alt="Logo" />
            </div>

            <div className="main-menu-toggle"  onClick={() => document.getElementById('main-nav').classList.toggle('show')}></div>

            <AdminMenu />            

        </header>
        </>
    )
}

export default AdminHeader
