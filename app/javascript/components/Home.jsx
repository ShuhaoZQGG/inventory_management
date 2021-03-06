import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Inventories</h1>
        <p className="lead">
          A list of inventories for the logistics company.
        </p>
        <hr className="my-4" />
        <Link
          to="/recipes"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Inventories
        </Link>
      </div>
    </div>
  </div>
);

export default Home