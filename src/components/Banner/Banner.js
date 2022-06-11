import { BiArrowBack } from "react-icons/bi";
import './Banner.css';

const Banner = () => {
    return (
      <div className="banner text-white">
        <div className="container d-flex justify-content-between pt-5 d-md-none">
          <div><BiArrowBack className="back" /></div>
          <div className="btn join-now">Join Now</div>
        </div>
        <div
          style={{ minHeight: "60vh" }}
          className="container mb-5 d-flex align-items-end text-white"
        >
          <div>
            <h2 className="fw-bold">Computer Engineering</h2>
            <p>142,765 Computer Engineers follow this</p>
          </div>
        </div>
      </div>
    );
};

export default Banner;