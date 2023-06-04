import React from 'react'

const Navbar = ({onClick,mode,para,icon}) => {
  
  return (
    <nav className='container-fluid  py-3'>
     <div className="row">
      <div className="col-md-6 text-center">
        <span className='fs-4'>Text Utils</span>
      </div>
      <div className="col-md-6 text-center">
       
        <span className='fs-5'> <i className={`fa-solid fa-${icon} fs-5`} onClick={onClick}></i> Enable {para} Mode</span>
      </div>
     </div>
    </nav>
  )
}

export default Navbar
