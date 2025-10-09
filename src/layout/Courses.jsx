import { CoursesDataItem } from '../Utils/Layout'
import React from 'react'
import { CoursesData } from '../Utils/data'

export const Courses = () => {
  return (
<section className="py-5">
  <div className="container">
    <div className="mb-4 text-center">
      <h2 className="fw-light">Pick A Course To Get Started</h2>
    </div>
    <div className="row g-4">
      {CoursesData.map(item => (
        <div className="col-12 col-md-6 col-lg-3" key={item.id}>
          <CoursesDataItem item={item} />
        </div>
      ))}
    </div>
    {/* Centered button below the course grid */}
    <div className="d-flex justify-content-center mt-4">
      <button className="btn btn-primary">Browse All Categories</button>
    </div>
  </div>
</section>

  )
}
export default Courses 