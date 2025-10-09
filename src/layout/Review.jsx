import { ReviewData } from "../Utils/data";
import { ReviewDataItem } from "../Utils/Layout";

export const Review = () => {
    return (
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container ">
        <header className=" text-center">
          <h2 className="lh-sm fw-normal text-center">Happy Students</h2>
        </header>
        <div className="row g-3 justify-content-center mx-auto mt-4"> 
          {ReviewData.map(item => (
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
              <ReviewDataItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}
export default Review