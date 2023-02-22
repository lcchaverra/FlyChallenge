import React from 'react'
import MainMenu from './MainMenu'
import logo from '/src/img/help.png';
import '/src/styles/css/styles.css'

function Header() {
    return (
        <>
        <header className="main-header">
            <div className="main-logo">
                <a href="/"><img src={logo} alt="Logo" /></a>
            </div>

            <div className="main-menu-toggle"  onClick={() => document.getElementById('main-nav').classList.toggle('show')}></div>

            <MainMenu />            

        </header>
        </>
    )
}

export default Header
