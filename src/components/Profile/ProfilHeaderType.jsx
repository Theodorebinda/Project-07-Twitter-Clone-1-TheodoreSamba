import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProfileHeaderType(props) {
  return (
    <>
      <div className="profile-header">
        <div className="back-button">
          <Link to="/">
            <FaArrowLeft />
          </Link>
        </div>
        <div className="profile-header-content">
          <p className="name">{props.name}</p>
          <p className="nbrs-post">{props.nbrsPostes} Posts</p>
        </div>
      </div>
    </>
  );
}
