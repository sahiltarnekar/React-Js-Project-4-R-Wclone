import { TopcoursesItem } from '../Utils/Layout'
import React from 'react'
import { topCoursesData } from '../Utils/data'

export const Topcourses = () => {
  return (
    <section className="py-5 ">
      <div className="container">
        <div className="mb-4 text-center">
          <h2 className="fw-light">Our Top Courses</h2>
        </div>
         <div className="row g-4">
                  {topCoursesData.map(item => (
                    <div className="col-12 col-md-6 col-lg-3" key={item.id}>
                      <TopcoursesItem item={item} />
                    </div>
                  ))}
                </div>
        </div>
        </section>
  )
}
export default Topcourses 