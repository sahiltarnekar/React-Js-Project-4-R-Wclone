import React from 'react'
// Reusable StudyItem component — expects an `item` object with { id, title, img }
export const StudyItem = ({ item }) => {
  return (
    <div className="card h-100 text-center my-5 shadoow-none border-0 ">
      <span class="border-end">
      <div className="card-body">
        
      {item.img && (
        <img src={item.img} className="card-img-top m-auto mt-5" style={{height:"80px", width:"80px"}} alt={item.title} />
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title lh-sm fw-normal">{item.title}</h5>
  
      </div>
      </div>
        </span>
    </div>
  )
}




export const TopcoursesItem = ({ item }) => {
  return (
   <div className="card shadow-0 " style={{ border:"none"}}>"
  <img src={item.img} style={{ width:"300px", height:"180px", objectFit:"cover"}} className="card-img-top " alt={item.title} />
  <div className="card-body ">
    <h4 className="card-title lh-sm fw-normal">{item.title}</h4>
    <div className="mb-2 d-flex align-items-center text-muted gap-1">
      <span className="card-title fw-normal">{item.rating}</span>
      <span  className="card-title d-inline" style={{color: "#f7b731"}}>
        {item.ratingicon}
      </span>
      <span className="text-muted"> ({item.students}) </span>
    </div>
    <h5 className="fw-normal  ">{item.price}</h5>
  </div>
</div>
  )
}



   export const PopulartopicItem = ({ item }) => {
  return (
    <div className="card text-center border-0 shadow-none" style={{backgroundColor: "#f8f9fa"}}>
      <div className="card-body py-4">
        {item.title}
      </div>
    </div>
  )
}

  export const PlaningItem = ({ item }) => {
  return (
  <div class="d-flex align-items-center mb-3 gap-3 flex-column flex-md-row text-center text-md-start ">
                <img src={item.img} style={{width:"60px", height:"60px"}} class="me-3"  alt={item.title}/>
                <div>
                  <div class="fw-bold">{item.title}</div>
                  <div class="text-muted" >{item.desc}</div>
                </div>
              </div>
  )
}
  export const CoursesDataItem = ({ item }) => {
  return (
     <div className="card shadow-0 " style={{ border:"none"}}>
  <img src={item.img} style={{ width:"300px", height:"180px", objectFit:"cover"}} className="card-img-top " alt={item.title} />
  <div className="card-body ">
    <h4 className="card-title lh-sm fw-normal">{item.title}</h4>
    <div className="mb-2 d-flex align-items-center text-muted gap-1">
      <span className="card-title fw-normal">{item.rating}</span>
      <span  className="card-title d-inline" style={{color: "#f7b731"}}>
        {item.ratingicon}
      </span>
      <span className="text-muted"> ({item.students}) </span>
    </div>
    <h5 className="fw-normal  ">{item.price}</h5>
  </div>
</div>
  
  )}

  export const NumberDataItem = ({ item }) => {
  return (
    <div className="card h-100 text-center my-5 shadoow-none border-0 ">
      <span class="border-end">
      <div className="card-body">
        <h1 className='card-title lh-sm fw-normal'>{item.count}</h1>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title lh-sm fw-normal">{item.subtitle}</h5>
      </div>
      </div>
        </span>
    </div>
  )
}

export const ReviewDataItem = ({ item }) => {
  return (
<div className="card h-100 text-center border-0"  style={{ backgroundColor: "#ffffff" }}>
    <div className="review card-body" style={{ padding: "60px 30px" }}>
      {item.img && (
        <img
          src={item.img}
          className="rounded-circle mb-3"
          style={{ width: "80px", height: "80px", objectFit: "cover" }}
          alt={item.name}
        />
      )}
      <h5 className="card-title m-4">{item.name}</h5>
      <p className="card-text fw-normal">"{item.message}"</p>
    </div>
  </div>


  )
}