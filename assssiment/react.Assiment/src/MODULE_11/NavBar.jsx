import { BookHeadphones, Moon, Search } from "lucide-react";
import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <a
            class="navbar-brand"
            style={{ fontSize: "40px", fontWeight: "700",  }}
            href="#"
          >
            Fin<span className="text-primary">Agenic</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              class="navbar-nav me-auto mb-2 mb-lg-0"
              style={{
                display: "flex",
                justifyContent: "center !important",
                // margin: "auto",
                marginLeft:"30px",
                fontSize: "20px",
                gap: "50px",
                alignItems:"center"
              }}
            >
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                {/* <BookHeadphones /> */}
                {/* <BookHeadphones size={28} strokeWidth={1.5} /> */}
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Service
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blog
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-disabled="true">
                  Contact
                </a>
              </li>
            </ul>
            <ul class="search-bar Bar mx-lg-4 d-flex justify-content-center align-items-center">
              <li>
                <a href="">
                  <Search className="d-flex search justify-content-center align-items-center text-center" />
                </a>
              </li>
              <li class="project">
                <a href="">Start a Project</a>
              </li>
            </ul>
            {/* { <form class="d-flex" role="search">
        
        <button class="btn btn-outline-success" style={{border:"2px solid black" , backgroundColor:"black"}} type="submit">Search</button>
      </form> } */}
          </div>
       
        </div>
      </nav>
    </div>
  );
}
