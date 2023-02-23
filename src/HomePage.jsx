import React from 'react'
import Header from './components/Header'
import MainBanner from './components/MainBanner'
import Group from './components/Group'
import Challenge from './components/Challenge'
import Features from './components/Features'
import MainFooter from './components/Footer'

const HomePage = () => {
    return(
        <>
        <Header />
        <MainBanner/>
        <Group/>
        <Challenge/>
        <Features/>
        {/* Seccion de Colaboradores, helppeople + RioSoftware */}
        <MainFooter/>  
        </>
    )
}

export default HomePage