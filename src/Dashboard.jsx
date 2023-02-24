import React from 'react'
import AdminHeader from './components/AdminHeader'
import DashHeader from './components/DashHeader'

export const Dashboard = () => {
  return (
    <div>
        <AdminHeader/>
        <div className="dashboard-container">
        <DashHeader/>
        <h2 className="title">Dashboard</h2>
        
        </div>
    </div>
  )
}
