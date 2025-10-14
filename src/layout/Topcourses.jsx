import { TopcoursesItem } from '../Utils/Layout'
import React from 'react'
import { topCoursesData } from '../Utils/data'


const TopCourses = () => {
  return (

  <div className="container">
     <div className="mb-4 text-center">
       <h2 className="fw-light">Our Top Courses</h2>
     </div>
     <div className="row g-4 mx-auto ">
       {topCoursesData.map(item => (
         <div className="col-md-6 col-lg-4 col-xxl-3 " key={item.id}>
           <TopcoursesItem item={item} />
         </div>
       ))}
     </div>
     </div> 
  


  );
};
export default TopCourses;