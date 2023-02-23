import React from 'react'
import HelpIMG from '/src/img/helpblue.png'
import RioImg from '/src/img/club.png'

const Features = () => {
  return (
    <div>
      <div className="section-divider"></div>
      <h2 className='title'>Patrocinadores</h2>
        <div className="main-container-2">
          <div className="group-grid-container">
            <img className='img-hover' src={HelpIMG} alt="Logo Helppeople" />
            <img className='img-hover' src={RioImg} alt="Logo Rio Software" />
          </div>
        </div>
    </div>
  )
}

export default Features
