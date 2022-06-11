import { BsFillShareFill, BsThreeDots } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdDateRange, MdOutlineShoppingBag } from "react-icons/md";
import "./Blogs.css";

const Blog = ({ post }) => {
  const { title, img, category, description, user, location, company, date } =
    post;
  return (
    <div class="card mb-3">
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <p>{category}</p>
        <div className="d-flex justify-content-between">
          <h5 class="card-title pe-md-5">{title}</h5>
          <h5 class="card-title pt-0">
            <div class="dropdown d-inline">
              <button
                class="border-0 btn"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <BsThreeDots />
              </button>
              <ul
                class="dropdown-menu post-dropdown"
                aria-labelledby="dropdownMenu2"
              >
                <li>
                  <button class="dropdown-item" type="button">
                    Edit
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Report
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Hide
                  </button>
                </li>
              </ul>
            </div>
          </h5>
        </div>
        <div>
          {location || date || company ? (
            <div>
              {category.includes("Job") ? (
                <div>
                  <div className="row">
                    <p className="col-6 d-flex align-items-center">
                      <MdOutlineShoppingBag className="me-1" />
                      <strong>{company}</strong>
                    </p>
                    <p className="col-6 d-flex align-items-center">
                      <HiOutlineLocationMarker className="me-1" />
                      <strong>{location}</strong>
                    </p>
                  </div>
                  <button className="btn btn-outline-success d-block w-100 fw-bold mb-3">
                    Apply on Times jobs
                  </button>
                </div>
              ) : (
                <div>
                  <div className="row">
                    <p className="col-6 d-flex align-items-center">
                      <MdDateRange className="me-1" />
                      <strong>{date}</strong>
                    </p>
                    <p className="col-6 d-flex align-items-center">
                      <HiOutlineLocationMarker className="me-1" />
                      <strong>{location}</strong>
                    </p>
                  </div>
                  <button className="btn btn-outline-danger d-block w-100 fw-bold mb-3">
                    Visit Website
                  </button>
                </div>
              )}
            </div>
          ) : (
            <p class="card-text text-muted">{description}</p>
          )}
        </div>
        <div className="row justify-content-between mt-4">
          <div className="col-6 d-flex align-items-center gap-2">
            <div className="">
              <img
                width="30px"
                height="30px"
                className="rounded-circle"
                src={user?.img}
                alt=""
              />
            </div>
            <h6 className="mb-0">{user?.name}</h6>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center gap-5">
            <div>
              <GrView /> 1.4k views
            </div>
            <div>
              <button className="btn bg-light">
                <BsFillShareFill />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
