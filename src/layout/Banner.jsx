
import BannerLogo from "../assets/images/banner.jpg"
const Banner = () => {
  return (
    <>
      <div className="baner">
        <img src={BannerLogo} alt="banner" className="img-fluid" />
        <div className="baner-text container d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="fw-bold">One Place For E-Learning</h1>
          <p className="fs-5">
            Ever Grow Is The Best Platform To Learn Online.
          </p>
          <div className="btn-wrapper">
            <button className="btn1">Get Register Now</button>
          </div>
        </div>
      </div>
      

    </>
  );
};

export default Banner;

