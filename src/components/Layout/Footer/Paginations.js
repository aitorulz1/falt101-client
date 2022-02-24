import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Pagination.css";

export default function Paginations() {
  return (
    <div className="pagination-container">
      <div className="pagination-content">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>
            <FaArrowRight />
          </li>
        </ul>
      </div>
    </div>
  );
}
