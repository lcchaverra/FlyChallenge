import React from "react";
import AdminHeader from './components/AdminHeader'
import DashHeader from './components/DashHeader'
import FormVacaOfert from './components/FormVacaOfert';

const RegVaPage = () => {
    return (
        <>
        <AdminHeader/>
            <div className="dashboard-container">
            <DashHeader/>        
            <FormVacaOfert/>
            </div>
        </>
    )
}

export default RegVaPage