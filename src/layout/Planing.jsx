import { PlaningData } from "../Utils/data";
import { PlaningItem } from "../Utils/Layout";

export const Planing = () => {
    return (
<div className="planing row align-items-center g-4 p-5 my-5 " style={{ backgroundColor: '#ffffff' ,color: '#212529'}}>
  {/* Left side: Heading */}
  <div className="col-lg-5 text-lg-start text-center mb-5 mb-lg-0">
    <h1 className="lh-sm fw-normal ">Start Your Learning 
     <br/> Journey Today.</h1>
    <button className="btn mt-4 ">Signup Now</button>
  </div>
  
  {/* Right side: 4 boxes, 2x2 grid */}
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