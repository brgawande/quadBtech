// StarRating.js
import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-x-3">
      {[...Array(10)].map((star, index) => (
        <FaStar
          key={index}
          className="star"
          color={rating >= index + 1 ? "#ffc107" : "#e4e5e9"}
          size={25}
        />
      ))}
    </div>
  );
};

export default StarRating;
