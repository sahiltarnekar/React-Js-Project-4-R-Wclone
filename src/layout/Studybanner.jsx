import React from 'react'
import {StudyItem} from "../Utils/Layout"
import { studyBannerData } from '../Utils/data'

const Studybanner = () => {
  return (
    <section className=" studybanner py-5">
      <div className="container ">
        <header className="mt-5  text-center">
          <h2 className="lh-sm fw-normal text-center">Why Study With E-Learn ?</h2>
        </header>

        <div className="row g-4 justify-content-center mx-auto"> 
          {studyBannerData.map(item => (
            <div className="col-12 col-md-6 col-lg-3" key={item.id}>
              <StudyItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Studybanner
