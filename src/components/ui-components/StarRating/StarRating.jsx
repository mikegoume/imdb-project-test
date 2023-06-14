import React from "react";

const StarRating = (props) => {
  const { rating } = props;

  const actual_rating = Math.round(rating / 2);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        return (
          <span
            className="star"
            style={{
              color: index < actual_rating ? "orange" : "#ccc",
              fontSize: 24,
            }}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
