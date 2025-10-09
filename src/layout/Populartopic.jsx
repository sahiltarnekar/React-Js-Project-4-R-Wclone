import React from 'react'
import { PopulartopicData } from '../Utils/data'
import { PopulartopicItem } from '../Utils/Layout'
export const Populartopic = () => {
  return (
    <section className="populartopic">
    <div className=" text-white py-5" style={{ backgroundColor: "#173156", color: "#212529", font: "20px", padding:"100px 200px" }}>
      <div className="container"  style={{ font: "20px", padding:"100px 0 " }}>
        <h2 className="text-center mb-5 font-light " style={{ fontFamily: 'serif', fontSize: '2.5rem' }}>Popular Topics To Learn</h2>
        <div className="row justify-content-center mb-4 g-3">

          {PopulartopicData.map(item => (
              <div className="col-6 col-md-4 col-lg-3 " key={item.id}>
              <PopulartopicItem item={item} />
            </div>
          ))}
        </div>
        <div className="text-center mt-5 ">
          <button className="btn  ">Browse More Category</button>
        </div>
      </div>
    </div>
          </section>


  )
}
export default Populartopic