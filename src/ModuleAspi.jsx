import React from 'react'
import AdminHeader from './components/AdminHeader'
import DashHeader from './components/DashHeader'
import { Show } from './components/Show'

const ModuleAspi = () => {
  return (
    <>
    <AdminHeader/>
      <div className="dashboard-container">
        <DashHeader/>        
        <Show/>
      </div>
    </>
  )
}

export default ModuleAspi
