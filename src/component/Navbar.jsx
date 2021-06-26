import React from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const Navbar = () => {
    return (
        <>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">
            <img src="https://cdn.pixabay.com/photo/2020/04/19/06/51/coronavirus-5062117_1280.png" alt="Stop covid" width="30" height="30" className="d-inline-block align-text-top" />
              <h3 className="d-inline-block mt-1" ><span className="text-danger">Covid19</span>Tracker</h3> </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
              </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link a active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link a" to="/social">Social</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light btn btn-danger" href="https://sahkritik.netlify.app">Portfolio</a>
        </li>
        </ul>
    </div>
  </div>
</nav>

        </>
    )
}

export default Navbar
