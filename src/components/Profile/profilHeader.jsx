import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import user from "../../utiles/user";
import { Link } from "react-router-dom";
export default function ProfileHeader() {


  return (
    <>
      <div className="profile-header">
        <div className="back-button">
          <Link to="/" >
            <FaArrowLeft />
          </Link>
        </div>
        <div className="profile-header-content">
          <p className="name">{user.name}</p>
          <p className="nbrs-post">{user.nbrsPostes} Posts</p>
        </div>
      </div>
    </>
  );
}