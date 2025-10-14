import React from 'react'
import { PopulartopicData } from '../Utils/data'
import { PopulartopicItem } from '../Utils/Layout'
export const Populartopic = () => {
  return (
    <>
      <div className="TopicData">
        <div className="container py-5">
          <h2 className="text-center mb-5 fw-light text-white">Popular Topics To Learn</h2>

          <div className="row justify-content-center text-black-50 fw-bold">
            {PopulartopicData.map((item) => (
              <div
               PopulartopicItem key={item.id}
                className="col-12 col-sm-6 col-md-4 col-lg-2-4 mb-3"
              >
                <div className="bg-white text-center p-3 ">
                  <p className="mb-0">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-warning fw-bold px-4 py-2">
              Browse More Category
            </button>
          </div>
        </div>
      </div>
    </>

  )
}
export default Populartopic