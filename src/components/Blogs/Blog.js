import { BsFillShareFill, BsThreeDots } from "react-icons/bs";
import { GrView } from "react-icons/gr";

const Blog = ({ post }) => {
  const { title, img, category, description, user } = post;
  return (
    <div class="card mb-3">
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <p>{category}</p>
        <div className="d-flex justify-content-between">
          <h5 class="card-title pe-md-5">{title}</h5>
          <h5 class="card-title pt-0">
            <BsThreeDots />
          </h5>
        </div>
        <p class="card-text text-muted">{description}</p>
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
