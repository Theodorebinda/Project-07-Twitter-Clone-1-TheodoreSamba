import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import user from "../../utiles/user";
export default function ProfileHeader() {


  return (
    <>
      <div className="profile-header">
        <div className="back-button">
          <a href="#" onClick={() => navigate(-1)}>
          <FaArrowLeft />
          </a>
        </div>
        <div className="profile-header-content">
          <p className="name">{user.name}</p>
          <p className="nbrs-post">{user.nbrsPostes} Posts</p>
        </div>
      </div>
    </>
  );
}