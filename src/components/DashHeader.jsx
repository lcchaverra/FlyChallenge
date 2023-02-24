import React from 'react'
import DashMenu from './DashMenu'
import '/src/styles/css/styles.css'

function DashHeader() {
    return (
        <>
        <header className="admin-header">
            <DashMenu />            
        </header>
        </>
    )
}

export default DashHeader
