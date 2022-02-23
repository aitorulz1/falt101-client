import React from "react";
import { FaUser } from "react-icons/fa";
import "./css/Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="person">
        <FaUser />
      </div>
    </div>
  );
}
