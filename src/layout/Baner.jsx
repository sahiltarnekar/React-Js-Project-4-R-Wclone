import React from 'react'
import BannerImg from "../assets/images/banner.jpg"
const Baner = () => {
  return (
    <>
  <div className='baner container-fluid p-0 m-0 position-relative'>
    
    <img src={BannerImg} alt="baner" className='img-fluid'/>
    <div className="baner-text container d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className='fw-light'>One Place For E-Learning</h1>
      <p className='fs-5'>Ever Grow Is The Best Platform To Learn Online.</p>
      <div className="btn-wrapper">
        <button className='btn btn-warning '>Get Register Now</button>
      </div>
    </div>
  </div>
  </>
  )
}

export default Baner