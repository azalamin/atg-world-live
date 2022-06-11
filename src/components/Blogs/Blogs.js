import { useEffect, useState } from "react";
import { AiOutlineInfoCircle, AiOutlineUsergroupAdd } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdCreate } from "react-icons/io";
import useUser from "../../hook/useUser";
import Blog from "./Blog";
import "./Blogs.css";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
   const [user, setUser] = useUser()
   
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <section className="mt-5">
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active-route">
                <a class="nav-link active" aria-current="page" href="#">
                  All Posts(32)
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Article
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Event
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Education
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Job
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div class="dropdown d-inline">
              <button
                class="dropdown-toggle border-0 bg-gray p-2 rounded-3 mb-2"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="pe-2">Write a Post</span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li>
                  <button class="dropdown-item" type="button">
                    Write a post
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Write a article
                  </button>
                </li>
              </ul>
            </div>
            {user ? (
              <button
                onClick={() => setUser(false)}
                className="border-0 bg-primary ms-3 p-2 rounded-3 text-white mb-2"
              >
                <GrLogout className="text-white" />
                Leaver Group
              </button>
            ) : (
              <button className="border-0 bg-primary ms-3 p-2 rounded-3 text-white mb-2">
                <AiOutlineUsergroupAdd />
                Join Group
              </button>
            )}
          </div>
        </nav>
        <hr />
        <div className="mt-3 row">
          <div className="col-md-8">
            {posts.map((post) => (
              <Blog key={post?.id} post={post} />
            ))}
          </div>
          <div className="d-none d-md-block col-md-4 mt-5">
            <div className="w-75 mx-auto position-relative">
              <HiOutlineLocationMarker className="icon" />
              <label className="d-inline" htmlFor="location">
                <IoMdCreate className="icon2" />
              </label>
              <input
                type="text"
                style={{ outlineWidth: "0" }}
                class="w-100 border-0 px-4 py-2 mx-3 mb-2 pe-5"
                id="location"
                placeholder="Enter your location"
                defaultValue={"Noida, India"}
              />
              <hr className="mx-1" />
              <div className="mt-5 d-flex">
                <p>
                  <AiOutlineInfoCircle className="info-icon" />
                </p>
                <p className="text-muted location-text">
                  <small>
                    Your location will help us serve better and extend a
                    personalised experience.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
