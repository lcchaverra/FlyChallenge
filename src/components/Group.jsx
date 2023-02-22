import React from 'react'
import PipeImg from '/src/img/pipe.jpeg';
import LuImg from '/src/img/lu.jpeg';

const Group = () => {
    return(
        <>
        <div className="section-divider"></div>
        <h2 className='title'>Grupo #3</h2>
        <div className="main-container-2">
        <div className="group-grid-container">
            <div className="group-card">
            <img src={PipeImg} alt="Card-Imagen" className="card-banner" />
                <div className="card-content">
                    <h3 className="title">Andrés Phelipe C.</h3>
                    <div className="section-divider"></div>
                    <p className="description"> Cargo: Fullstack</p>
                </div>
            </div>

            <div className="group-card">
            <img src={LuImg} alt="Card-Imagen" className="card-banner" />
                <div className="card-content">
                    <h3 className="title">Luis Carlos Ch.</h3>
                    <div className="section-divider"></div>
                    <p className="description">Cargo: Fullstack</p>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Group