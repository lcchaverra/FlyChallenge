import React from 'react'
import BannerImg from '/src/img/banner.png';
import '/src/styles/css/styles.css'

const MainBanner = () => {
    return (
        <>
        <section className="main-section-banner">
            <div className="main-section-img">
                <img src={BannerImg} alt="Foto de Perfil" />
            </div>
        </section>
        </>    
    )
} 

export default MainBanner
