import { useEffect, useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import Blog from "./Blog";
import './Blogs.css';

const Blogs = () => {
    const [posts, setPosts] = useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
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
              <button className="border-0 bg-primary ms-3 p-2 rounded-3 text-white mb-2">
                <AiOutlineUsergroupAdd />
                Join Group
              </button>
            </div>
          </nav>
          <hr />
          <div className="mt-3 row">
            <div className="col-8">
                {
                    posts.map(post => <Blog key={post?.id} post={post} />)
                }
            </div>
            <div className="col-4">z</div>
          </div>
        </div>
      </section>
    );
};

export default Blogs;