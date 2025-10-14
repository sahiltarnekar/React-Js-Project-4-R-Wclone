import { PlaningData } from "../Utils/data";
import { PlaningItem } from "../Utils/Layout";

export const Planing = () => {
    return (
<div className="planing row align-items-center g-4 p-5 my-5 " style={{ backgroundColor: '#ffffff' ,color: '#212529'}}>
  {/* Left side: Heading */}
  <div className="col-lg-5 text-start px-5">
    <h1 className="lh-sm fw-normal  ">Start Your Learning 
     <br/> Journey Today.</h1>
    <button className="btn btn-primary mt-4 ">Signup Now</button>
  </div>
  

  <div className="col-lg-7">
    <div className="row g-4">
      {PlaningData.map(item => (
        <div className="col-md-6" key={item.id}>
          {/* Box content */}
          <PlaningItem item={item} />
        </div>
      ))}
    </div>
  </div>
</div>
    );
};
export default Planing;