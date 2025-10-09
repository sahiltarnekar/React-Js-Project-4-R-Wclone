import { NumberData} from "../Utils/data"
import { NumberDataItem } from "../Utils/Layout"

const Number = () => {
  return (
    <section className=" studybanner py-5">
      <div className="container ">
        <header className="mt-5  text-center">
          <h2 className="lh-sm fw-normal text-center">Numbers We Have</h2>
        </header>

        <div className="row g-4 justify-content-center mx-auto"> 
          {NumberData.map(item => (
            <div className="col-12 col-md-6 col-lg-3" key={item.id}>
              <NumberDataItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Number
